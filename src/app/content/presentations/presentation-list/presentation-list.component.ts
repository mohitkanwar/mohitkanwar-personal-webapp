import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrls: ['./presentation-list.component.css']
})
export class PresentationListComponent implements OnInit {

  @Input() list;
  constructor() { }

  ngOnInit(): void {
  }

}
