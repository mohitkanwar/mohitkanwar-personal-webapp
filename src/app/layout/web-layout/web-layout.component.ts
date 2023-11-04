import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-web-layout',
  templateUrl: './web-layout.component.html',
  styleUrls: ['./web-layout.component.css'],
  providers: [DatePipe]
})
export class WebLayoutComponent implements OnInit{
  currentYear: String | null; 
  constructor(private datePipe: DatePipe) {
    this.currentYear = this.datePipe.transform(new Date(), 'yyyy');

   }

  ngOnInit(): void {
  }
  


}
