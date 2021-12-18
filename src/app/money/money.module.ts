import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationBoxComponent } from './donation-box/donation-box.component';



@NgModule({
  declarations: [
    DonationBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DonationBoxComponent
  ]
})
export class MoneyModule { }
