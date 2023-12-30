import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsHomeComponent } from './blogs-home/blogs-home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogTechItemComponent as BlogDetailedItemComponent } from './blog-tech-item/blog-tech-item.component';
import { BlogSummaryItemComponent } from './blog-summary-item/blog-summary-item.component';
import { MarkdownModule } from 'ngx-markdown';
import { SecurityContext } from '@angular/core';
/**
 * The module path '/tech/' will be prepended to following routes
 */
export const routes : Routes = [
  {path: '', component: BlogsHomeComponent},
  {path: ':blogId', component: BlogDetailedItemComponent},
]

@NgModule({
  declarations: [
    BlogsHomeComponent,
    BlogDetailedItemComponent,
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PageBlogsModule { }
