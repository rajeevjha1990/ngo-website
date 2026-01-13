import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SHARED_IONIC_MODULES } from 'src/app/shared/shared.ionic';
import { ToastController } from '@ionic/angular'; // Toast संदेश दिखाने के लिए
import { FooterComponent } from 'src/app/components/footer/footer/footer.component';



@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
  standalone: true,
  imports: [...SHARED_IONIC_MODULES, HeaderComponent,FooterComponent]
})
export class DonatePage implements OnInit {
  upiId: string = "upay846390en@ujjivan";

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }
  async copyUPI() {
    try {
      await navigator.clipboard.writeText(this.upiId);
      const toast = await this.toastController.create({
        message: 'UPI ID कॉपी कर लिया गया है!',
        duration: 2000,
        position: 'bottom',
        color: 'success',
        icon: 'copy-outline'
      });
      toast.present();
    } catch (err) {
      console.error('Copy failed', err);
    }
  }

  // UPI ऐप खोलने का फंक्शन
  openUPILink() {
    const upiUrl = `upi://pay?pa=${this.upiId}&pn=Sabka%20Vikas%20Jayti&cu=INR`;
    window.location.href = upiUrl;
  }
}
