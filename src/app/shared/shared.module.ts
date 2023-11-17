import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MdReadComponent } from './md-read/md-read.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { SpeechComponent } from './speech/speech.component';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    MdReadComponent,
    SpeechComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MarkdownModule.forRoot()
  ],
  exports: [
    MdReadComponent,
    SpeechComponent
  ]
})
export class SharedModule { }
