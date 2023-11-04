import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';

export const routes: Routes = [
  {
    path: '',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'terms-of-service',
    component: TermsOfServiceComponent,
  }

]

@NgModule({
  declarations: [
    PrivacyPolicyComponent,
    TermsOfServiceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PageGeneralModule { }
