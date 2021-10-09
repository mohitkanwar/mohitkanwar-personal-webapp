import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationsComponent } from './presentations/presentations.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogsComponent } from './blogs/blogs.component';
import { VideosComponent } from './videos/videos.component';
import { QuotesBannerComponent } from './quotes-banner/quotes-banner.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { PresentationListComponent } from './presentations/presentation-list/presentation-list.component';
import { PresentationListItemComponent } from './presentations/presentation-list-item/presentation-list-item.component';



@NgModule({
  declarations: [
    PresentationsComponent,
    ProjectsComponent,
    BlogsComponent,
    VideosComponent,
    QuotesBannerComponent,
    PresentationListComponent,
    PresentationListItemComponent
  ],
  exports: [
    PresentationsComponent,
    ProjectsComponent,
    BlogsComponent,
    VideosComponent,
    QuotesBannerComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule
  ]
})
export class ContentModule { }
