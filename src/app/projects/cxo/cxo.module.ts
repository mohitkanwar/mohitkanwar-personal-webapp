import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourCxoCircleComponent } from './your-cxo-circle/your-cxo-circle.component';
import { RouterModule, Routes } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
export const routes: Routes = [
  {
      path: '',
      component: YourCxoCircleComponent,
      children: [
          { path: 'day-1', component: YourCxoCircleComponent },
      ]
  }
];

@NgModule({
  declarations: [
    YourCxoCircleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
    MatCardModule,
    MatSliderModule,
    RouterModule.forChild(routes)
  ]
})
export class CxoModule { }
