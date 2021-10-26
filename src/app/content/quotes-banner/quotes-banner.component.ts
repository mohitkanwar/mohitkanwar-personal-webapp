import { trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import config from '../../../../src/assets/data/quotes.json';
@Component({
  selector: 'app-quotes-banner',
  templateUrl: './quotes-banner.component.html',
  styleUrls: ['./quotes-banner.component.css'],
})
export class QuotesBannerComponent implements OnInit, OnDestroy {

  constructor() { }

  selectedQuote: Quote;
  fillPercent: number;
  fillerInterval;
  quoteInterval;
  ngOnInit(): void {
    this.refreshQuote();
    this.quoteInterval = setInterval(() => {
      clearInterval(this.fillerInterval);
      this.fillerInterval = setInterval(() => {
        if (this.fillPercent === 100) {
          clearInterval(this.fillerInterval);
        } else {
          this.fillPercent = this.fillPercent + 1;
        }
      }, 100);
      this.refreshQuote();
    }, 10000);
  }

  ngOnDestroy(): void {
    clearInterval(this.fillerInterval);
    clearInterval(this.quoteInterval);
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
