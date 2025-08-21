import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {ModalController} from "@ionic/angular";
import {TargetModalComponent} from "../target-modal-component/target-modal.component";

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  standalone: false,
})
export class ExploreContainerComponent implements OnInit{

  @Input() name?: string;
  @Input() contentOnModal?: string;
  @Input() contentOnPage?: string;

  modal: any;
  constructor(public sanitizer: DomSanitizer, private modalController: ModalController) {

  }

  ngOnInit() {

  }
  async openModal(){
    this.modal = await this.modalController.create({
      component: TargetModalComponent,
      cssClass: "target-message-modal",
      canDismiss: true,
      componentProps: {
        targetMessage: this.contentOnModal
      }
    });

    await this.modal.present();
  }
}
