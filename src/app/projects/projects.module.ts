import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPublicInfoComponent } from './my-public-info/my-public-info.component';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsContainerComponent } from './projects-container/projects-container.component';
import { MyBlogComponent } from './my-blog/my-blog.component';
import { MoneyModule } from '../money/money.module';

export const routes: Routes = [
  {
      path: '',
      component: ProjectsContainerComponent,
      children: [
          { path: 'my-public-info', component: MyPublicInfoComponent },
          { path: 'my-blog', component: MyBlogComponent },
      ]
  }
];

@NgModule({
  declarations: [
    MyPublicInfoComponent,
    ProjectsContainerComponent,
    MyBlogComponent
  ],
  imports: [
    CommonModule,
    MoneyModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectsModule { }
