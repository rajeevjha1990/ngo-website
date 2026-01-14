import { Component, OnInit } from '@angular/core';
import { AlertController,  NavController } from '@ionic/angular';
import { IonListHeader } from '@ionic/angular/standalone';
import { IonSpinner } from '@ionic/angular/standalone';

import { FooterComponent } from 'src/app/components/footer/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { PubService } from 'src/app/services/pub/pub.service';
import { SHARED_IONIC_MODULES } from 'src/app/shared/shared.ionic';
// import { ProgramService } from '../services/program.service';

@Component({
  selector: 'app-program-payment',
  templateUrl: './program-payment.page.html',
  styleUrls: ['./program-payment.page.scss'],
    imports: [...SHARED_IONIC_MODULES, HeaderComponent,FooterComponent,IonListHeader,IonSpinner],
  
})
export class ProgramPaymentPage implements OnInit {

  MIN_AMOUNT = 300;

  applyData: any = null;

  payment_mode: string = 'COD';

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private programServ: PubService
  ) {}

  ngOnInit() {
    const data = localStorage.getItem('program_apply_data');
    if (!data) {
      this.navCtrl.navigateBack('/program');
      return;
    }

    this.applyData = JSON.parse(data);
    console.log(this.applyData);
  }

  async confirmOrder() {

    if (!this.payment_mode) {
      await this.showAlert('Please select payment method.');
      return;
    }

    const payload = {
      ...this.applyData,
      amount: this.MIN_AMOUNT,
      payment_mode: this.payment_mode,
      payment_status: this.payment_mode === 'COD' ? 'pending' : 'paid',
      transaction_id: ''
    };
    console.log(payload);
    // If online → future gateway integration here
   // if (this.payment_mode === 'ONLINE') { openGateway(); return; }

    try {
    const resp = await this.programServ.applyProgram(payload);
      console.log(resp);
    if (resp && resp.status === 200) {
      localStorage.removeItem('program_apply_data');
      await this.showAlert('आपका आवेदन सफलतापूर्वक सबमिट हो गया है 🙏');
      this.navCtrl.navigateRoot('/home');
    } else {
      await this.showAlert(resp?.msg || 'Something went wrong.');
    }

  } catch (err) {
    console.error(err);
    await this.showAlert('Server error.');
  }

  }

  async showAlert(message: string) {
    const alert = await this.alertCtrl.create({
      header: 'Info',
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
