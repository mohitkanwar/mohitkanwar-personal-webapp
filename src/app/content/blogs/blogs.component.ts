import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import blogs from '../../../assets/data/blogs.json';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogList: Blog[];
  

  ngOnInit(): void {
    this.blogList = blogs.blogsList;
  }

}
class Blog {
  src: SafeResourceUrl;
  title: string;
  description: string;
}
