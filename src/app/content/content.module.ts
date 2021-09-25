import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationsComponent } from './presentations/presentations.component';
import { ProjectsComponent } from './projects/projects.component';



@NgModule({
  declarations: [
    PresentationsComponent,
    ProjectsComponent
  ],
  exports: [
    PresentationsComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContentModule { }
