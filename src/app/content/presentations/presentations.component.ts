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
  previousIndex;
  nextIndex;
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
    this.previousIndex = this.presentationsList.length - 1;
    this.nextIndex = this.selectedIndex + 1;
  }
  selectNext(): void {
    if (this.selectedIndex === this.presentationsList.length - 1) {
      this.selectedIndex = 0;
      this.previousIndex = this.presentationsList.length - 1;
      this.nextIndex = this.selectedIndex + 1;
    } else {
      this.selectedIndex++;
      this.previousIndex = this.selectedIndex - 1;
      this.nextIndex = this.selectedIndex + 1;
    }
  }
  selectPrevious(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.presentationsList.length - 1;
      this.previousIndex = this.selectedIndex - 1;
      this.nextIndex = 0;
    } else {
      this.selectedIndex--;
      this.previousIndex = this.selectedIndex - 1;
      this.nextIndex = this.selectedIndex + 1;
    }
  }

}

class Presentation {
  src: SafeResourceUrl;
  title: string;
}
