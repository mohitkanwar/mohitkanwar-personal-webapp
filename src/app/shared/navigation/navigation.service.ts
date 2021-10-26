import { Injectable } from '@angular/core';
import links from '../../../assets/data/navigation-links.json';
import { NavigationLink } from './navigationlinks.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }
  getLinks(): NavigationLink[] {
    return links.links;
  }
  getSecondaryLinks(): NavigationLink[] {
    return links.secondarylinks;
  }

}
