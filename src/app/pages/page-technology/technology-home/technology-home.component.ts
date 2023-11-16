import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface BlogData {
  blogs: string[];
}

@Component({
  selector: 'app-technology-home',
  templateUrl: './technology-home.component.html',
  styleUrls: ['./technology-home.component.css']
})
export class TechnologyHomeComponent implements OnInit{
techblogs : string[] = [
  "technology/the-technology-of-modern-banks",
  "technology/large-language-models",
  "technology/technologies"
]
constructor(private http: HttpClient) {}

ngOnInit(): void {
  this.http.get<BlogData>('../../../assets/blogs/technology/home.json').subscribe(
    (data) => {
      this.techblogs = data.blogs;
      console.log(data);
    },
    (error) => {
      console.error('Error fetching JSON file', error);
      this.techblogs = [
        "technology/the-technology-of-modern-banks",
        "technology/large-language-models",
        "technology/technologies"
      ]
    }
  );
}
}
