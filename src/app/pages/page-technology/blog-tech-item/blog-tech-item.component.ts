import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/shared/md-read/blog.model';
import { MdReadService } from 'src/app/shared/services/md-read.service';
import { Meta } from '@angular/platform-browser';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-blog-tech-item',
  templateUrl: './blog-tech-item.component.html',
  styleUrls: ['./blog-tech-item.component.css']
})
export class BlogTechItemComponent implements OnInit {
  path!: string;
  blog: Blog = new Blog(0, "", "", "", new Date(), "", "", "", "");
  trustedHtml: SafeHtml | undefined; // Hold the sanitized HTML
  constructor(
    private route: ActivatedRoute,
    private meta: Meta,
    private blogReadService: MdReadService,
    private sanitizer: DomSanitizer,
    private markdownService: MarkdownService) {

  }
  ngOnInit(): void {
    const routerParamPath = this.route.snapshot.paramMap.get('blogId');

    this.path = 'technology/' + routerParamPath;
    this.blogReadService.readBlog(this.path).subscribe((blog: Blog) => {
      this.blog = blog;
      const parsedHTML = this.markdownService.parse(blog.content);
    // Sanitize the HTML content to allow iframes
    this.trustedHtml = this.sanitizer.bypassSecurityTrustHtml(parsedHTML);
      this.meta.updateTag({ name: 'title', content: this.blog.title + ' | FinTech | Mohit Kanwar' });
      this.meta.updateTag({ property: 'og:title', content: this.blog.title});
      this.meta.updateTag({ name: 'og:title', content: this.blog.title });

    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ name: 'description', content: this.blog.metaDescription });
    this.meta.updateTag({ name: 'og:description', content: this.blog.metaDescription });
    this.meta.updateTag({ property: 'og:description', content: this.blog.metaDescription });
    
    this.meta.updateTag({ property: 'og:type', content: "article" });
    this.meta.updateTag({ property: 'og:site_name', content: "Mohit Kanwar's Blog" });
    
    this.meta.updateTag({ property: 'og:locale', content: "en_US" });
    //TODO not sure why date converison is required, but is breaking without this conversion.
    //TODO Fix the root cause, and remove this conversion
    blog.publishDate = new Date(blog.publishDate);
    // Convert the date to an ISO string

    this.meta.updateTag({ property: 'og:article:published_time', content: blog.publishDate.toISOString() });
    
    this.meta.updateTag({ property: 'og:article:author', content: blog.author });

    this.meta.updateTag({ name: 'twitter:card', content: this.blog.metaImagePath ? 'summary_large_image' : 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: this.blog.title });
    this.meta.updateTag({ name: 'twitter:description', content: this.blog.metaDescription });
    if (this.blog.metaImagePath) {
      const metaImagePath = 'https://mohitkanwar.com/' + this.blog.metaImagePath;
      this.meta.updateTag({ name: 'twitter:image', content: metaImagePath });
      this.meta.updateTag({ name: 'og:image', content: metaImagePath});
      this.meta.updateTag({ property: 'og:image', content: metaImagePath});
    }
    });
  }
  padZero(num: number): string {
    return num.toString().padStart(2, '0');
  }
}

 

