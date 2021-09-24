import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.css']
})
export class PresentationsComponent implements OnInit {

  presentationsList: Presentation[];
  selectedIndex;
  constructor(private sanitizer: DomSanitizer) {
    this.presentationsList = new Array();
  }
  ngOnInit(): void {
    this.presentationsList.push({src: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.slideshare.net/slideshow/embed_code/key/llNYsQSnZOvNW2'), title : 'Hibernate'});
    this.selectedIndex = 0;
  }


}

class Presentation {
  src: SafeResourceUrl;
  title: string;
}
