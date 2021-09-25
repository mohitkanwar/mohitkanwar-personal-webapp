import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationsComponent } from './presentations/presentations.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogsComponent } from './blogs/blogs.component';
import { VideosComponent } from './videos/videos.component';



@NgModule({
  declarations: [
    PresentationsComponent,
    ProjectsComponent,
    BlogsComponent,
    VideosComponent
  ],
  exports: [
    PresentationsComponent,
    ProjectsComponent,
    BlogsComponent,
    VideosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContentModule { }
