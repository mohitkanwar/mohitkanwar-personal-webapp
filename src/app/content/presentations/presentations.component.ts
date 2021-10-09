import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import config from '../../../assets/data/presentations.json';
import { EventsService } from '../../events/events.service';
import { Presentation } from './presentation.model';
@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.css']
})
export class PresentationsComponent implements OnInit {

  presentationsList: Presentation[];
  showDeck = false;
  selectedPresentation: Presentation;

  constructor(private sanitizer: DomSanitizer, private events: EventsService) {
    this.presentationsList = new Array();
  }
  ngOnInit(): void {
    config.presentationList.forEach(element => {
      this.presentationsList.push(
        {
          id: element.id,
          src: this.sanitizer.bypassSecurityTrustResourceUrl(element.src),
          title: element.title,
          preview: this.sanitizer.bypassSecurityTrustResourceUrl(element.preview),
          description: element.description
        }
      );
    });
    this.showDeck = true;
    // subscribe presentation selected event
    this.events.presentationEvent.subscribe(presentation => {
      this.onSelect(presentation);
    });
    this.selectedPresentation = this.presentationsList[0];
  }
  onSelect(presentation: Presentation) {
    this.showDeck = false;
    this.selectedPresentation = this.presentationsList.find(x => x.id === presentation.id);
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
