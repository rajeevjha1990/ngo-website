import { Component, OnInit } from "@angular/core";
import { SHARED_IONIC_MODULES } from "src/app/shared/shared.ionic";
import { HeaderComponent } from "src/app/components/header/header.component";
import { FooterComponent } from "src/app/components/footer/footer/footer.component";
import { IonModal } from "@ionic/angular/standalone";

@Component({
  selector: "app-download",
  templateUrl: "./download.page.html",
  styleUrls: ["./download.page.scss"],
  standalone: true,
  imports: [
    IonModal,
    ...SHARED_IONIC_MODULES,
    HeaderComponent,
    FooterComponent,
  ],
})
export class DownloadPage implements OnInit {
  documents = [
    {
      category: "Reports",
      files: [
        {
          name: "Registration Certificate",
          size: "500KB",
          format: "JPG",
          imageUrl: "/assets/docs/reg_cert.jpg",
        },
        {
          name: "Pancard",
          size: "300KB",
          format: "JPG",
          imageUrl: "/assets/docs/pancard.jpg",
        },
        {
          name: "Profile",
          size: "400KB",
          format: "JPG",
          imageUrl: "/assets/docs/ABWAS0997E_registration_profile.jpg",
        },
      ],
    },
  ];

  selectedDocName = "";
  selectedImageUrl = "";
  isViewerOpen = false;
  ngOnInit() {}

  viewFile(file: any) {
    this.selectedDocName = file.name;
    this.selectedImageUrl = file.imageUrl;
    this.isViewerOpen = true;
  }

  closeViewer() {
    this.isViewerOpen = false;
    this.selectedImageUrl = "";
    this.selectedDocName = "";
  }
}
