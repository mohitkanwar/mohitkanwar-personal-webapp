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
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContentHomeComponent } from './content-home/content-home.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
export const routes: Routes = [
  {
      path: '',
      component: ContentHomeComponent,
      children: [
          { path: 'videos', component: VideosComponent },
          { path: 'training', component: PresentationsComponent},
          { path: 'projects', component: ProjectsComponent},
          { path: 'blogs', component: BlogsComponent}
      ]
  }
];

@NgModule({
  declarations: [
    PresentationsComponent,
    ProjectsComponent,
    BlogsComponent,
    VideosComponent,
    QuotesBannerComponent,
    PresentationListComponent,
    PresentationListItemComponent,
    ContentHomeComponent
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
    MatGridListModule,
    MatProgressBarModule,
    RouterModule.forChild(routes)
  ]
})
export class ContentModule { }
