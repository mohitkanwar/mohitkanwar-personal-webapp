import { Component, Input, OnInit } from '@angular/core';
import { MdReadService } from 'src/app/shared/md-read/md-read.service';

@Component({
  selector: 'app-blog-summary-item',
  templateUrl: './blog-summary-item.component.html',
  styleUrls: ['./blog-summary-item.component.css']
})
export class BlogSummaryItemComponent implements OnInit{
  @Input() path!: string;
  title: string = '';
  publishedDate: Date = new Date();
  excerpt: string = '';
  url: string = '';
  image: string = ''
  constructor(private blogReadService: MdReadService) {}
  ngOnInit(): void {
    this.blogReadService.readBlog(this.path).subscribe((blog)=> {
      this.title = blog.title;
      this.publishedDate = blog.publishDate;
      const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      let summary = blog.summary;
      if (summary ==  null) {
        summary = blog.metaDescription;
      }
      console.log(this.title)
      console.log(this.url)
      console.log(summary)
      // Replace all Markdown links with their associated text
      const textWithoutLinks = summary.replace(markdownLinkRegex, (match, text) => text);
      this.excerpt = textWithoutLinks;
      this.url = this.path.split('/')[1];
      this.image = blog.metaImagePath;
      
    })
  }
}
