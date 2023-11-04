import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultHomeComponent } from './default-home/default-home.component';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  {
      path: '',
      component: DefaultHomeComponent,
  }
];

@NgModule({
  declarations: [
    DefaultHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PageHomeModule { }
