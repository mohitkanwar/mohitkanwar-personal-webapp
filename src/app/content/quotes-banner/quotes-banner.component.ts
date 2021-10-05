import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-banner',
  templateUrl: './quotes-banner.component.html',
  styleUrls: ['./quotes-banner.component.css']
})
export class QuotesBannerComponent implements OnInit {

  constructor() { }
  selectedQuote: Quote;
  ngOnInit(): void {
    this.selectedQuote = new Quote();
    this.selectedQuote.heading = 'Start';
    this.selectedQuote.description = 'It might be incomplete, but it is better than not being there';
    this.selectedQuote.author = 'Mohit Kanwar';
  }

}
class Quote {
  heading: string;
  description: string;
  author: string;
}
