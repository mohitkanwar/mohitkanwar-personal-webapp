import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import config from '../../../../src/assets/data/quotes.json';
@Component({
  selector: 'app-quotes-banner',
  templateUrl: './quotes-banner.component.html',
  styleUrls: ['./quotes-banner.component.css'],
})
export class QuotesBannerComponent implements OnInit {

  constructor() { }
  selectedQuote: Quote;
  fillPercent: number;
  ngOnInit(): void {
    setInterval(() => {
      this.refreshQuote();
    }, 5000);
    this.refreshQuote();
  }
  refreshQuote() {
    this.fillPercent = 0;
    const random = Math.floor(Math.random() * config.quotes.length);
    this.selectedQuote = config.quotes[random];
    this.fillPercent = 100;
  }

}
class Quote {
  heading: string;
  description: string;
  author: string;
  authorprofile: string;
}
