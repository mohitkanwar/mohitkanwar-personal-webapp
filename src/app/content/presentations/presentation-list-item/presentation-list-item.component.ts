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
  constructor(private eventservice: EventsService) { }

  ngOnInit(): void {
  }

  onSelect() {
    this.eventservice.presentationEvent.emit(this.presentation);
  }

}
