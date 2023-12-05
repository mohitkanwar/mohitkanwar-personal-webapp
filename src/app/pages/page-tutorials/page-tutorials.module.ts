import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GinTutorialComponent } from './gin-tutorial/gin-tutorial.component';
import { RouterModule, Routes } from '@angular/router';


export const routes : Routes = [
  {path: '', component: GinTutorialComponent},
]

@NgModule({
  declarations: [
    GinTutorialComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PageTutorialsModule { }
