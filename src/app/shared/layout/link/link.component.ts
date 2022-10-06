import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  @Input() cssClasses;
  @Input() url;
  @Input() icon;
  @Input() text;
  isExternal: boolean;
  constructor() { }

  ngOnInit(): void {
    this.isExternal = this.url.startsWith("http:") || this.url.startsWith("https:");
  }

}
