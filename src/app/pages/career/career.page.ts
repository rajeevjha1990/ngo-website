import { Component, OnInit } from '@angular/core';
import { SHARED_IONIC_MODULES } from 'src/app/shared/shared.ionic';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { NavController } from '@ionic/angular';
import { FooterComponent } from 'src/app/components/footer/footer/footer.component';

@Component({
  selector: 'app-career',
  templateUrl: './career.page.html',
  styleUrls: ['./career.page.scss'],
  standalone: true,
  imports: [...SHARED_IONIC_MODULES, HeaderComponent,FooterComponent]
})
export class CareerPage implements OnInit {
  jobs = [
    { title: 'Project Coordinator', location: 'Delhi', experience: '1-3 वर्ष', type: 'Full-time' },
    { title: 'Social Media Manager', location: 'Remote / WFH', experience: '1+ वर्ष', type: 'Part-time' },
    { title: 'Field Trainer', location: 'Bihar / UP', experience: 'Fresher / Experienced', type: 'Field Work' }
  ];

  hrEmail = "careers@sabkavikasjyti.org";
  hrPhone = "+91 9876543210";
  hrAddress = "सबका विकास ज्यति NGO कार्यालय, भारत";


  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  async sendMessage(form: any) {
  }
  apply(job: any) {
    this.navCtrl.navigateForward('/apply', {
      queryParams: { position: job.title }
    });
  }

  openVolunteer() {
    this.navCtrl.navigateForward('/volunteer');
  }
scrollToJobs(){

}
}
