import { Component, Input, OnInit } from '@angular/core';
import { EventsService } from '../../../events/events.service';
import { Presentation } from '../presentation.model';

@Component({
  selector: 'app-presentation-list-item',
  templateUrl: './presentation-list-item.component.html',
  styleUrls: ['./presentation-list-item.component.css']
})
export class PresentationListItemComponent implements OnInit {
  @Input() presentation: Presentation;
  @Input() index?: number;
  constructor(private eventservice: EventsService) { }

  ngOnInit(): void {
  }

  onSelect() {
    window.scroll(0, 0);
    this.eventservice.presentationEvent.emit(this.presentation);
  }

}
