import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/shared/md-read/blog.model';
import { MdReadService } from 'src/app/shared/md-read/md-read.service';

@Component({
  selector: 'app-blog-tech-item',
  templateUrl: './blog-tech-item.component.html',
  styleUrls: ['./blog-tech-item.component.css']
})
export class BlogTechItemComponent implements OnInit{
  path!: string;
  blog: Blog = new Blog(0,"","","",new Date(),"");
  constructor(
      private route: ActivatedRoute,
     private blogReadService: MdReadService) {
    
  }
  ngOnInit(): void {
      const routerParamPath = this.route.snapshot.paramMap.get('blogId');
     
        this.path = 'technology/'+routerParamPath;
        this.blogReadService.readBlog(this.path).subscribe((blog: Blog) => {
          this.blog = blog;
        });
  }

 
}
