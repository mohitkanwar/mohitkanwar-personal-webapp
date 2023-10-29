import { Injectable } from '@angular/core';
import links from '../../../assets/data/navigation-links.json';
import { NavigationLink } from './navigationlinks.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }
  getLinks(category: string): NavigationLink[] {
    return links.links[category];
  }
}
