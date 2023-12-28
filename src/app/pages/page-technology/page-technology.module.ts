import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyHomeComponent } from './technology-home/technology-home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogTechItemComponent } from './blog-tech-item/blog-tech-item.component';
import { BlogSummaryItemComponent } from './blog-summary-item/blog-summary-item.component';
import { MarkdownModule } from 'ngx-markdown';
import { SecurityContext } from '@angular/core';
/**
 * The module path '/tech/' will be prepended to following routes
 */
export const routes : Routes = [
  {path: '', component: TechnologyHomeComponent},
  {path: ':blogId', component: BlogTechItemComponent},
]

@NgModule({
  declarations: [
    TechnologyHomeComponent,
    BlogTechItemComponent,
    BlogSummaryItemComponent
  ],
  providers: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MarkdownModule.forRoot({
          sanitize: SecurityContext.NONE
        })
  ]
})
export class PageTechnologyModule { }
