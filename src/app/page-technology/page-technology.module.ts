import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyHomeComponent } from './technology-home/technology-home.component';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  {
      path: '',
      component: TechnologyHomeComponent,
      // children: [
      //     { path: 'my-public-info', component: MyPublicInfoComponent },
      //     { path: 'my-blog', component: MyBlogComponent },
      //     { path: 'jeevan-ratna', component: JeevanRatansComponent },
      //     {
      //       path: 'cxo',
      //       loadChildren: () => import('./cxo/cxo.module').then(m => m.CxoModule)
      //     },
      // ]
  }
];
@NgModule({
  declarations: [
    TechnologyHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PageTechnologyModule { }
