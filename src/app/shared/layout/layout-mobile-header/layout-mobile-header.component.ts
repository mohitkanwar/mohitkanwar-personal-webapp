import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { version } from '../../../../../package.json';
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
  public version: string = version;
  visibilityState = 'closed';
  constructor() { }


  ngOnInit(): void {
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
