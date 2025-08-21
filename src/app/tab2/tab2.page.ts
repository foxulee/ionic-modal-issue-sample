import { Component } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  contentOnModal: any;
  contentOnPage: any;

  constructor(public sanitizer: DomSanitizer) {
    this.contentOnPage = `
    <div style="color: red">Here is the content with sanitizer (public sanitizer: DomSanitizer; sanitizer.bypassSecurityTrustHtml(contentOnPage)).</div>
    `
  }

}
