import { Component, Input, OnInit } from '@angular/core';
import { MdReadService } from './md-read.service';
import { Blog } from './blog.model';

@Component({
  selector: 'app-md-read',
  templateUrl: './md-read.component.html',
  styleUrls: ['./md-read.component.css']
})
export class MdReadComponent implements OnInit{
  markdownContent : string = '';
  @Input() path!: string;
  @Input() showSummary: boolean = false;

  constructor(private blogReadService: MdReadService) {

  }
  ngOnInit(): void {
    this.blogReadService.readBlog(this.path).subscribe((blog: Blog) => {
      this.markdownContent = blog.title + "\n\n" + blog.content;
    });
  }

}
