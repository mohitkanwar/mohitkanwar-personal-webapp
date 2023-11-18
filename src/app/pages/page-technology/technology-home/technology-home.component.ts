import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';

interface BlogData {
  blogs: [{ fileName: "string", publishDate: Date }];
}

@Component({
  selector: 'app-technology-home',
  templateUrl: './technology-home.component.html',
  styleUrls: ['./technology-home.component.css']
})
export class TechnologyHomeComponent implements OnInit {
  initialDisplayCount = 5;
  loadCount = 5;
  techblogs: string[] = [
    "technology/working-with-global-teams",
    "technology/fido",
    "technology/the-technology-of-modern-banks",
    "technology/technologies",
    "technology/large-language-models",
    "technology/crafting-api-magic"
  ]
  allBlogs: string[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<BlogData>('../../../assets/blogs/technology/home.json').subscribe(
      (data) => {
        this.allBlogs = data.blogs.map(blogItem => {
          return "technology/" + blogItem.fileName
        });
        this.techblogs = this.allBlogs.slice(0, this.initialDisplayCount);
      },
      (error) => {
        console.error('Error fetching JSON file', error);
        this.techblogs = [
          "technology/working-with-global-teams",
          "technology/fido",
          "technology/the-technology-of-modern-banks",
          "technology/technologies",
          "technology/large-language-models",
          "technology/crafting-api-magic"
        ]
      }
    );
  }
  loadMore(): void {
    console.log("load more")
    if (this.techblogs.length < this.allBlogs.length) {
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
