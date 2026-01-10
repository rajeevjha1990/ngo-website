import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SHARED_IONIC_MODULES } from 'src/app/shared/shared.ionic';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-program-view',
  templateUrl: './program-view.page.html',
  styleUrls: ['./program-view.page.scss'],
  standalone: true,
  imports: [...SHARED_IONIC_MODULES, HeaderComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ProgramViewPage implements OnInit {
  program: any;

  programs = [
    {
      id: 1,
      hero_image: '/assets/SVJ-Images/group-loan-4.jpg',
      name: 'स्वयं सहायता समूह |',
      short_desc: 'महिलाओं और युवाओं को प्रशिक्षण और बिना गारंटी के लोन सहायता।',
      description_blocks: [
        { type: 'text', content: 'सबका विकास ज्यति ने यह अभियान शुरू किया है, जिसके अंतर्गत हम स्वयं सहायता समूह (Self Help Group - SHG) बनाकर लोगों को संगठित कर आत्मनिर्भर बनने हेतु प्रेरित कर रहे हैं।' },
        { type: 'text', content: 'गाँवों में महिलाएँ विभिन्न व्यवसाय शुरू कर सकती हैं, लेकिन पूंजी की कमी सबसे बड़ी बाधा होती है। SHG के माध्यम से उन्हें लोन और प्रशिक्षण मिलता है।' },
        { type: 'bullet', points: [
          'कम ब्याज पर लोन उपलब्ध',
          'आसान मासिक किस्तें',
          'व्यवसाय शुरू करने में मार्गदर्शन',
          'महिला और युवा सशक्तिकरण'
        ]},
        { type: 'text', content: 'SHG के सहयोग से कई महिलाएँ आज सफल व्यवसाय चला रही हैं और सम्मानपूर्वक जीवन जी रही हैं।' }
      ]
    },
    {
      id: 2,
      hero_image: 'assets/SVJ-Images/pad-awareness-2.jpg',
      name: 'सेनेटरी पैड जागरूकता अभियान',
      short_desc: 'महिलाओं में स्वच्छता और स्वास्थ्य के प्रति जागरूकता।',
      description_blocks: [
        { type: 'text', content: 'यह योजना महिलाओं एवं किशोरियों में माहवारी के समय बढ़ते रोगों की रोकथाम हेतु शुरू की गई है।' },
        { type: 'image', url: 'assets/SVJ-Images/pad-awareness-2.jpg', caption: 'महिलाओं को पैड उपयोग के फायदे बताते हुए' },
       { 
        type: 'bullet', 
        points: [
          'A–9 क्वालिटी',
          '100% कस्ट जेल टेक्नोलॉजी',
          'मार्केट में उपलब्ध नहीं',
          'सुरक्षित और आरामदायक',
          'इस कार्यक्रम में भाग लेने के लिए कोई वस्तु खरीदने या बेचने की आवश्यकता नहीं है। केवल न्यूनतम योगदान ₹300 (minimum contribution) देकर आप पूरे 1 वर्ष तक इसके लाभ उठा सकते हैं।',
          'अधिक योगदान भी दे सकते हैं, कोई अधिकतम सीमा नहीं है।'
        ]
      },

        { type: 'text', content: 'इस पैड का उपयोग करके महिलाएँ सुरक्षित और आरामदायक अनुभव प्राप्त करती हैं।' }
      ]
    },
    {
      id: 3,
      hero_image: 'assets/SVJ-Images/barmiimage2.jpg',
      name: 'बर्मी कम्पोस्ट जागरूकता अभियान',
      short_desc: 'किसानों को जैविक खाद निर्माण सिखाना।',
      description_blocks: [
        { type: 'text', content: 'किसानों को रासायनिक खाद की जगह जैविक खाद अपनाने के लिए प्रशिक्षण दिया जाता है।' },
        { type: 'bullet', points: [
          'मिट्टी की उर्वरता बढ़ाना',
          'कम लागत में अधिक उत्पादन',
          'पर्यावरण के अनुकूल खेती',
          'रासायनिक खाद पर निर्भरता कम'
        ]},
        { type: 'image', url: 'assets/SVJ-Images/barmiimage2.jpg', caption: 'बर्मी कम्पोस्ट उत्पादन प्रशिक्षण' }
      ]
    },
    {
      id: 4,
      hero_image: 'assets/SVJ-Images/seed.jpg',
      name: 'बीज वितरण और संरक्षण योजना',
      short_desc: 'किसानों को उच्च गुण वाले बीज उपलब्ध कराना।',
      description_blocks: [
        { type: 'text', content: 'यह योजना किसानों को उच्च गुणवत्ता के बीज उपलब्ध कराने और बीज संरक्षण बढ़ाने के लिए बनाई गई है।' },
        { type: 'image', url: 'assets/SVJ-Images/seed.jpg', caption: 'बीज वितरण एवं संरक्षण प्रशिक्षण शिविर' },
        { type: 'bullet', points: ['सही बीज चयन', 'बीज संरक्षण विधि', 'रोग प्रतिरोधक पौधे', 'कम लागत – अधिक उत्पादन'] }
      ]
    },
    {
      id: 5,
      hero_image: 'assets/SVJ-Images/kaushal-vikas-780x389.jpg',
      name: 'कौशल विकास प्रशिक्षण कार्यक्रम',
      short_desc: 'युवाओं और महिलाओं को रोजगार योग्य कौशल प्रदान करना।',
      description_blocks: [
        { type: 'text', content: 'ग्रामीण युवाओं को रोजगार और नौकरियों के लिए योग्य बनाना मुख्य उद्देश्य है।' },
        { type: 'image', url: 'assets/SVJ-Images/kaushal-vikas-780x389.jpg', caption: 'कौशल विकास प्रशिक्षण सत्र' },
        { type: 'bullet', points: ['सिलाई/कढ़ाई', 'कंप्यूटर ट्रेनिंग', 'ब्यूटी और वेलनेस कोर्स', 'मार्केटिंग एवं सेल्स'] }
      ]
    }
  ];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.program = this.programs.find(x => x.id === id);
  }
}
