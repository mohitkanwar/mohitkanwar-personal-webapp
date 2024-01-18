import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';


interface BlogData {
  blogs: [{ fileName: "string", publishDate: Date }];
}

interface BlogNode {
  name: string;
  link?: string;
  children?: BlogNode[];
}


@Component({
  selector: 'app-blogs-home',
  templateUrl: './blogs-home.component.html',
  styleUrls: ['./blogs-home.component.css']
})
export class BlogsHomeComponent implements OnInit {
  treeControl = new NestedTreeControl<BlogNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<BlogNode>();
  TREE_DATA: BlogNode[] = []
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
  constructor(private http: HttpClient) { 
    this.loadAllBlogsLinks();
    //this.dataSource.data = this.TREE_DATA;
  }

  ngOnInit(): void {
  this.loadHomeBlogs();
   
  
}
  private loadAllBlogsLinks() {
    console.log("loading all")
    this.http.get<BlogNode[]>('../../../assets/blogs/all.json').subscribe({
      next: (data) => {
        console.log("chhhhhh")
        this.dataSource.data = data;
        console.log (this.dataSource.data)
      },
      error: (error) => {
        console.error('Error fetching JSON file', error);
      }
    }
    );
  }
  private loadHomeBlogs() {
    this.http.get<BlogData>('../../../assets/blogs/home.json').subscribe({
      next: (data) => {
        this.allBlogs = data.blogs.map(blogItem => {
          return blogItem.fileName;
        });
        this.techblogs = this.allBlogs.slice(0, this.initialDisplayCount);
        this.allBlogs.forEach((blog) => {
          console.log(blog);
        });
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
        ];
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
  hasChild = (_: number, node: BlogNode) => !!node.children && node.children.length > 0;

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
