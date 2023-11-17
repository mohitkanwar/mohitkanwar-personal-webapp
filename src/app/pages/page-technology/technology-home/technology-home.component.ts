import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface BlogData {
  blogs: [{ fileName: "string", publishDate: Date}];
}

@Component({
  selector: 'app-technology-home',
  templateUrl: './technology-home.component.html',
  styleUrls: ['./technology-home.component.css']
})
export class TechnologyHomeComponent implements OnInit{
techblogs : string[] = [
  "technology/working-with-global-teams",
  "technology/fido",
  "technology/the-technology-of-modern-banks",
  "technology/technologies",
  "technology/large-language-models",
  "technology/crafting-api-magic"
]
constructor(private http: HttpClient) {}

ngOnInit(): void {
  this.http.get<BlogData>('../../../assets/blogs/technology/home.json').subscribe(
    (data) => {
      this.techblogs = data.blogs.map(blogItem => {
        return "technology/"+ blogItem.fileName
      });
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
}
