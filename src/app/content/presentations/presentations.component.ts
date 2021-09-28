import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import config from '../../../assets/data/presentations.json';
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
    this.selectedIndex = 0;
    config.presentationList.forEach(element => {
      this.presentationsList.push(
        {
          src: this.sanitizer.bypassSecurityTrustResourceUrl(element.url),
          title : element.title
        }
      );
    });
  }
  selectNext(): void {
    if (this.selectedIndex === this.presentationsList.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
  selectPrevious(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.presentationsList.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

}

class Presentation {
  src: SafeResourceUrl;
  title: string;
}
