import { Component, OnInit } from '@angular/core';
import { SHARED_IONIC_MODULES } from 'src/app/shared/shared.ionic';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer/footer.component';

@Component({
  selector: 'app-download',
  templateUrl: './download.page.html',
  styleUrls: ['./download.page.scss'],
  standalone: true,
  imports: [...SHARED_IONIC_MODULES,HeaderComponent,FooterComponent]
})
export class DownloadPage implements OnInit {
  documents = [
    {
      category: 'आधिकारिक दस्तावेज़ (Official Docs)',
      files: [
        { name: 'NGO पंजीकरण प्रमाण पत्र', size: '1.2 MB', format: 'PDF', url: 'assets/docs/reg_cert.pdf' },
        { name: 'संस्था का उप-नियम (By-Laws)', size: '2.5 MB', format: 'PDF', url: 'assets/docs/bylaws.pdf' }
      ]
    },
    {
      category: 'वार्षिक रिपोर्ट (Reports)',
      files: [
        { name: 'वार्षिक कार्य रिपोर्ट 2024-25', size: '3.1 MB', format: 'PDF', url: 'assets/docs/report_2025.pdf' },
        { name: 'ऑडिट रिपोर्ट (Audit Statement)', size: '1.8 MB', format: 'PDF', url: 'assets/docs/audit.pdf' }
      ]
    },
    {
      category: 'आवेदन फॉर्म (Forms)',
      files: [
        { name: 'स्वयंसेवक पंजीकरण फॉर्म', size: '500 KB', format: 'PDF', url: 'assets/docs/volunteer_form.pdf' },
        { name: 'सदस्यता आवेदन पत्र', size: '450 KB', format: 'DOCX', url: 'assets/docs/member_form.docx' }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }
  downloadFile(file: any) {
    // यहाँ आप डाउनलोड लॉजिक लगा सकते हैं या सीधे URL खोल सकते हैं
    window.open(file.url, '_blank');
    console.log('Downloading:', file.name);
  }

}
