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
  filler;
  ngOnInit(): void {
    this.refreshQuote();
    setInterval(() => {
      clearInterval(this.filler);
      this.filler = setInterval(() => {
        if (this.fillPercent === 100) {
          clearInterval(this.filler);
        } else {
          this.fillPercent = this.fillPercent + 1;
        }
      }, 100);
      this.refreshQuote();
    }, 10000);
  }
  refreshQuote() {
    this.fillPercent = 0;
    const random = Math.floor(Math.random() * config.quotes.length);
    this.selectedQuote = config.quotes[random];
  }
}
class Quote {
  heading: string;
  description: string;
  author: string;
  authorprofile: string;
}
