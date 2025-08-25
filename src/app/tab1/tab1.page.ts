import { Component } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  contentOnModal: string;
  contentOnPage: string;

  constructor(public sanitizer: DomSanitizer) {
    this.contentOnModal = "Test";
    this.contentOnPage = `Here is the content without sanitizer. <div style="color: yellow !important;">And also regular html</div>`;

  }


}
