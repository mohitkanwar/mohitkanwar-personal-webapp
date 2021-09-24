import {  NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeComponent } from './home.component';
import { HomeAuthResolver } from './home-auth-resolver.service';
import { SharedModule } from '../shared';
import { HomeRoutingModule } from './home-routing.module';
import { ContentModule } from '../content/content.module';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    MatTabsModule,
    ContentModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    HomeAuthResolver
  ]
})
export class HomeModule {}
