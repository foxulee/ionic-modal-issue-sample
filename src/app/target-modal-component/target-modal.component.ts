import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-target-modal-component',
  templateUrl: './target-modal.component.html',
  styleUrls: ['./target-modal.component.scss'],
  standalone: false
})
export class TargetModalComponent implements OnInit {
  @Input()targetMessage = "";

  dynamicHtml: SafeHtml;
  constructor(public sanitizer: DomSanitizer, public modalController: ModalController) {
    this.dynamicHtml = this.sanitizer.bypassSecurityTrustHtml(this.targetMessage);
  }

  ngOnInit() {}

}
