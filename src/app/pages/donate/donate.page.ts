import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SHARED_IONIC_MODULES } from 'src/app/shared/shared.ionic';



@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
  standalone: true,
  imports: [...SHARED_IONIC_MODULES, HeaderComponent]
})
export class DonatePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openUPILink() {
    const upiLink = 'upi://pay?pa=sabkavikas@upi&pn=SabkaVikasJayti&am=100&cu=INR';
    window.open(upiLink, '_system');
  }
  async sendMessage(form: any) {

  }
}
