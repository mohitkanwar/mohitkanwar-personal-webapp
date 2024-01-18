import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-web-layout',
  templateUrl: './web-layout.component.html',
  styleUrls: ['./web-layout.component.scss'],
  providers: [DatePipe]
})
export class WebLayoutComponent implements OnInit{
  currentYear: String | null; 
  version = environment.version;
  title = 'Mohit'
  constructor(private datePipe: DatePipe) {
    this.currentYear = this.datePipe.transform(new Date(), 'yyyy');

   }

  ngOnInit(): void {
    
  }
  


}
