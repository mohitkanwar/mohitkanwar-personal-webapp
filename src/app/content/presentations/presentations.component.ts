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
  showDeck = false;
  selectedIndex;
  previousIndex;
  nextIndex;
  screenSize: number;
  constructor(private sanitizer: DomSanitizer) {
    this.presentationsList = new Array();
  }
  ngOnInit(): void {
    this.screenSize = window.innerWidth;
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
    this.showDeck = true;
  }
  selectNext(): void {
    this.showDeck = false;
    this.selectedIndex = this.selectedIndex === this.presentationsList.length - 1 ?
       0 : this.selectedIndex + 1;
    this.setupPrevAndNext();
  }
  private setupPrevAndNext() {
    if (this.selectedIndex === 0) {
      this.previousIndex = this.presentationsList.length - 1;
      this.nextIndex = this.selectedIndex + 1;
    } else if (this.selectedIndex === this.presentationsList.length - 1) {
      this.previousIndex = this.selectedIndex - 1;
      this.nextIndex = 0;
    } else {
      this.previousIndex = this.selectedIndex - 1;
      this.nextIndex = this.selectedIndex + 1;
    }
  }

  selectPrevious(): void {
    this.showDeck = false;
    this.selectedIndex = this.selectedIndex === 0 ?
      this.presentationsList.length - 1 : this.selectedIndex - 1;
    this.setupPrevAndNext();
  }
  onResize(event) {
    this.screenSize = event.target.innerWidth;
    console.log(this.screenSize);
  }

  onMyFrameLoad(event) {
    console.log('Frame loaded');
    console.log(event);
    this.showDeck = true;
  }
  onMyFrameChange(event) {
    console.log('Frame Changed');
    console.log(event);
  }
}

class Presentation {
  src: SafeResourceUrl;
  title: string;
}
