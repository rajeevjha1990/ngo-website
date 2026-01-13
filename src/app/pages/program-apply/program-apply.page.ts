import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { FooterComponent } from 'src/app/components/footer/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SHARED_IONIC_MODULES } from 'src/app/shared/shared.ionic';

@Component({
  selector: 'app-program-apply',
  templateUrl: './program-apply.page.html',
  styleUrls: ['./program-apply.page.scss'],
    imports: [...SHARED_IONIC_MODULES, HeaderComponent,FooterComponent],
  
})
export class ProgramApplyPage implements OnInit {

  programId: number = 0;

  formData: any = {
    program_id: '',
    name: '',
    mobile: '',
    pincode: '',
    address: ''
  };
programs = [
  { id: 1, name: 'स्वयं सहायता समूह', short_desc: 'महिलाओं और युवाओं को प्रशिक्षण और बिना गारंटी के लोन सहायता।' },
  { id: 2, name: 'सेनेटरी पैड जागरूकता अभियान', short_desc: 'महिलाओं में स्वच्छता और स्वास्थ्य के प्रति जागरूकता।' },
  { id: 3, name: 'बर्मी कम्पोस्ट जागरूकता अभियान', short_desc: 'किसानों को जैविक खाद निर्माण सिखाना।' },
  { id: 4, name: 'बीज वितरण और संरक्षण योजना', short_desc: 'किसानों को उच्च गुण वाले बीज उपलब्ध कराना।' },
  { id: 5, name: 'कौशल विकास प्रशिक्षण कार्यक्रम', short_desc: 'युवाओं और महिलाओं को रोजगार योग्य कौशल प्रदान करना।' }
];
program:any={}
  constructor(
    private route: ActivatedRoute,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.programId = Number(this.route.snapshot.paramMap.get('id'));
    this.formData.program_id = this.programId;
      this.program = this.programs.find(p => p.id === this.programId);

  }

  async proceedToPayment() {

    if (!this.formData.name || this.formData.name.trim() === '') {
      await this.showAlert('Name is required.');
      return;
    }

    if (!this.formData.mobile ) {
      await this.showAlert('Valid mobile number is required.');
      return;
    }

    if (!this.formData.address || this.formData.address.trim() === '') {
      await this.showAlert('Address is required.');
      return;
    }

    // Save temporary data
    localStorage.setItem('program_apply_data', JSON.stringify(this.formData));
    
    // Go to payment page
    this.navCtrl.navigateForward('/program-payment/' + this.programId);
  }

  async showAlert(message: string) {
    const alert = await this.alertCtrl.create({
      header: 'Validation Error',
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
