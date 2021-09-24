import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationsComponent } from './presentations/presentations.component';



@NgModule({
  declarations: [
    PresentationsComponent
  ],
  exports: [
    PresentationsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContentModule { }
