import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MdReadComponent } from './md-read/md-read.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    MdReadComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MarkdownModule.forRoot()
  ],
  exports: [
    MdReadComponent
  ]
})
export class SharedModule { }
