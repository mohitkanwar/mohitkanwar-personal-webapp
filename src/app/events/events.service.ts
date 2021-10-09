import { Injectable, EventEmitter } from '@angular/core';
import { Presentation } from '../content/presentations/presentation.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  public presentationEvent: EventEmitter<Presentation> = new EventEmitter<Presentation>();
}
