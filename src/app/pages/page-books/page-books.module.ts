import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksHomeComponent } from './books-home/books-home.component';
import { RouterModule, Routes } from '@angular/router';


export const routes : Routes = [
  {path: '', component: BooksHomeComponent},
]

@NgModule({
  declarations: [
    BooksHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PageBooksModule { }
