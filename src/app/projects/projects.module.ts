import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPublicInfoComponent } from './my-public-info/my-public-info.component';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsContainerComponent } from './projects-container/projects-container.component';
import { MyBlogComponent } from './my-blog/my-blog.component';
import { MoneyModule } from '../money/money.module';
import { JeevanRatansComponent } from './jeevan-ratans/jeevan-ratans.component';

export const routes: Routes = [
  {
      path: '',
      component: ProjectsContainerComponent,
      children: [
          { path: 'my-public-info', component: MyPublicInfoComponent },
          { path: 'my-blog', component: MyBlogComponent },
          { path: 'jeevan-ratna', component: JeevanRatansComponent },
          {
            path: 'cxo',
            loadChildren: () => import('./cxo/cxo.module').then(m => m.CxoModule)
          },
      ]
  }
];

@NgModule({
  declarations: [
    MyPublicInfoComponent,
    ProjectsContainerComponent,
    MyBlogComponent,
    JeevanRatansComponent
  ],
  imports: [
    CommonModule,
    MoneyModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectsModule { }
