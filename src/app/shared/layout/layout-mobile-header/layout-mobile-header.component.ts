import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import packageInfo from '../../../../../package.json';
import { NavigationService } from '../../navigation/navigation.service';
import { NavigationLink } from '../../navigation/navigationlinks.model';
@Component({
  selector: 'app-layout-mobile-header',
  templateUrl: './layout-mobile-header.component.html',
  styleUrls: ['./layout-mobile-header.component.css'],
  animations: [
    trigger('visibility', [
        state('closed', style({
            width: 0,
        })),
        state('open', style({
            width: '40%'
        })),
        transition('* => *', animate(150))
    ]),
]
})
export class LayoutMobileHeaderComponent implements OnInit {
  today: number = Date.now();
  public version: string = packageInfo.version;
  links: NavigationLink[];
  visibilityState = 'closed';
  constructor(private navigationService: NavigationService) { }


  ngOnInit(): void {
    this.links = this.navigationService.getLinks();
  }
  toggleNav() {
    this.visibilityState === 'open' ? this.closeNav() : this.openNav();
  }
  openNav() {
    this.visibilityState = 'open';
  }

  closeNav() {
    this.visibilityState = 'closed';
  }
}
