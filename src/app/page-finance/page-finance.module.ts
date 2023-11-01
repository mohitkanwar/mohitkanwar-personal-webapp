import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceHomeComponent } from './finance-home/finance-home.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
      path: '',
      component: FinanceHomeComponent,
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
    FinanceHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PageFinanceModule { }
