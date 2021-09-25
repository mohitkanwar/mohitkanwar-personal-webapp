import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationsComponent } from './presentations/presentations.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogsComponent } from './blogs/blogs.component';



@NgModule({
  declarations: [
    PresentationsComponent,
    ProjectsComponent,
    BlogsComponent
  ],
  exports: [
    PresentationsComponent,
    ProjectsComponent,
    BlogsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContentModule { }
