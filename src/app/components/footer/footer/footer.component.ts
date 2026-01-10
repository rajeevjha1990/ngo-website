import { Component } from '@angular/core';
import { SHARED_IONIC_MODULES } from 'src/app/shared/shared.ionic';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [...SHARED_IONIC_MODULES],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
