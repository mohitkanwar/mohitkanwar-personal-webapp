import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { BlogsService } from './blogs.service';
import { MediumBlogsResponse } from './mediumblogs.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlogsComponent implements OnInit {

  blogs: MediumBlogsResponse;

  constructor(private blogsService: BlogsService) {}
  ngOnInit(): void {
    this.blogsService.getBlogs()
    .subscribe(
      (data: MediumBlogsResponse) => {
        this.blogs = data;
        console.log(data);
      }
    );
  }

}
