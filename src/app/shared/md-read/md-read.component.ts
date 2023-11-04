import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-md-read',
  templateUrl: './md-read.component.html',
  styleUrls: ['./md-read.component.css']
})
export class MdReadComponent implements OnInit{
  markdownContent : string = '';
  @Input()
  path!: string;
  constructor(private httpClient : HttpClient) {

  }
  ngOnInit(): void {
    this.httpClient.get('assets/md/' + this.path + '.md', {responseType: 'text'})
    .subscribe((data)=> this.markdownContent = data);
  }

}
