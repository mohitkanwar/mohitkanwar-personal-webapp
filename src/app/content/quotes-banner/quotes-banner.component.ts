import { Component, OnInit } from '@angular/core';
import config from '../../../../src/assets/data/quotes.json';
@Component({
  selector: 'app-quotes-banner',
  templateUrl: './quotes-banner.component.html',
  styleUrls: ['./quotes-banner.component.css']
})
export class QuotesBannerComponent implements OnInit {

  constructor() { }
  selectedQuote: Quote;
  ngOnInit(): void {
    // change foreach to random
    config.quotes.forEach(element => {
      this.selectedQuote = element;
    });
    console.log(config);
  }

}
class Quote {
  heading: string;
  description: string;
  author: string;
  authorprofile: string;
}
