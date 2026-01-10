import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { SHARED_IONIC_MODULES } from './shared/shared.ionic';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, ...SHARED_IONIC_MODULES,
    IonApp,
    IonRouterOutlet,
  ]
})
export class AppComponent {
  constructor() { }
}
