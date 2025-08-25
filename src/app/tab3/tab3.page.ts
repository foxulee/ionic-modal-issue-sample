import {Component, inject} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  contentOnModal: any;
  contentOnPage: any;
  sanitizer = inject(DomSanitizer);
  constructor() {
    this.contentOnModal = `
    <div style="color: red">Here is the content with sanitizer (public sanitizer: DomSanitizer; sanitizer.bypassSecurityTrustHtml(contentOnModal)).</div>
    `;
    this.contentOnPage = `
    <div style="color: red">Here is the content with sanitizer (sanitizer = inject(DomSanitizer); sanitizer.bypassSecurityTrustHtml(contentOnPage)).</div>
    `;
  }

}
