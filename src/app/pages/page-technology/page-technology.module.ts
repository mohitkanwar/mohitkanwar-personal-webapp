import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyHomeComponent } from './technology-home/technology-home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

export const routes : Routes = [
  {path: '', component: TechnologyHomeComponent}
]

@NgModule({
  declarations: [
    TechnologyHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PageTechnologyModule { }
