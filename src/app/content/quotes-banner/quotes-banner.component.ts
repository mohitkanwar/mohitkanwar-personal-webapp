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
    this.selectedQuote = config.quotes[Math.floor(Math.random() * config.quotes.length)];
  }

}
class Quote {
  heading: string;
  description: string;
  author: string;
  authorprofile: string;
}
