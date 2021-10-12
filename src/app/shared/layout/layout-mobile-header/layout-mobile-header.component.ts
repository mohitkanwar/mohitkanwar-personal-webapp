import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

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

  visibilityState = 'closed';
  constructor() { }


  ngOnInit(): void {
  }
  openNav() {
    console.log('Open nav');
    this.visibilityState = 'open';
  }

  closeNav() {
    console.log('Close nav');
    this.visibilityState = 'closed';
  }
}
