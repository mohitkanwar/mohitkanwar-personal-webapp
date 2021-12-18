import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationBoxComponent } from './donation-box/donation-box.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    DonationBoxComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    DonationBoxComponent
  ]
})
export class MoneyModule { }
