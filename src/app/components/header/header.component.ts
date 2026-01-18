import { Component } from "@angular/core";
import { SHARED_IONIC_MODULES } from "src/app/shared/shared.ionic";
import { PopoverController } from "@ionic/angular";
import { ProgrammenuComponent } from "../programmenu/programmenu.component";
import { PubService } from "src/app/services/pub/pub.service";
import { RajeevhttpService } from "src/app/services/http/rajeevhttp.service";

@Component({
  selector: "app-header",
  standalone: true,
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  imports: [...SHARED_IONIC_MODULES],
})
export class HeaderComponent {
  private programPopover: any;
  private menuBtn: HTMLElement | null = null;
  events: any[] = [];

  constructor(
    public popoverCtrl: PopoverController,
    private pubServ: PubService,
    public myhttp: RajeevhttpService,
  ) {
    this.pubServ.callnewEventts().then((events) => {
      this.events = events;
    });
    console.log(this.events);
  }

  async openProgramMenu(ev: MouseEvent) {
    ev.preventDefault();
    this.menuBtn = ev.currentTarget as HTMLElement;
    if (this.programPopover) return;
    this.menuBtn.classList.add("active");
    this.programPopover = await this.popoverCtrl.create({
      component: ProgrammenuComponent,
      event: ev,
      translucent: false,
      showBackdrop: false,
      alignment: "end",
      side: "bottom",
    });

    await this.programPopover.present();
    this.programPopover.onDidDismiss().then(() => {
      this.removeActiveClass();
      this.programPopover = null;
      this.menuBtn = null;
    });
  }

  removeActiveClass() {
    if (this.menuBtn) {
      this.menuBtn.classList.remove("active");
    }
  }

  async onProgramMouseLeave(event: MouseEvent) {
    const toElement = event.relatedTarget as HTMLElement;
    if (toElement && toElement.closest("ion-popover")) {
      return;
    }
    if (this.programPopover) {
      try {
        await this.programPopover.dismiss();
      } catch (e) {}
    }
  }
  async closeProgramMenu() {
    console.log("ok");
    if (this.programPopover) {
      try {
        await this.programPopover.dismiss();
      } catch {}
    }
  }
}
