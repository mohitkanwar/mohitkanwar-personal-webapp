import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';

interface BlogData {
  blogs: [{ fileName: "string", publishDate: Date }];
}

@Component({
  selector: 'app-blogs-home',
  templateUrl: './blogs-home.component.html',
  styleUrls: ['./blogs-home.component.css']
})
export class BlogsHomeComponent implements OnInit {
  initialDisplayCount = 5;
  loadCount = 5;
  techblogs: string[] = [
    "working-with-global-teams",
    "fido",
    "the-technology-of-modern-banks",
    "technologies",
    "large-language-models",
    "crafting-api-magic"
  ]
  allBlogs: string[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  this.http.get<BlogData>('../../../assets/blogs/home.json').subscribe({
      next: (data) => {
        this.allBlogs = data.blogs.map(blogItem => {
          return   blogItem.fileName
        });
        this.techblogs = this.allBlogs.slice(0, this.initialDisplayCount);
      },
      error: (error) => {
        console.error('Error fetching JSON file', error);
        this.techblogs = [
          "working-with-global-teams",
          "fido",
          "the-technology-of-modern-banks",
          "technologies",
          "large-language-models",
          "crafting-api-magic"
        ]
      }
    }
    );
  }
  loadMore(): void {
    if (this.techblogs.length < this.allBlogs.length) {
      console.log("loading...")
      const currentlyDisplayed = this.techblogs.length;
      const remainingData = this.allBlogs.slice(currentlyDisplayed, currentlyDisplayed + this.loadCount);
      this.techblogs = this.techblogs.concat(remainingData);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const windowHeight = document.documentElement.clientHeight || window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

    const currentPosition = scrollPosition + windowHeight;
    const buffer = 10; // You can adjust the buffer value as needed

    if (currentPosition >= documentHeight - buffer) {
      this.loadMore();
    }
  }
}
