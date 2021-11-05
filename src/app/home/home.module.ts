import {  NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeComponent } from './home.component';
import { HomeAuthResolver } from './home-auth-resolver.service';
import { SharedModule } from '../shared';
import { HomeRoutingModule } from './home-routing.module';
import { ContentModule } from '../content/content.module';
import { TimelineComponent } from './timeline/timeline.component';
import { VideoPostComponent } from './timeline/video-post/video-post.component';
import { ImagePostComponent } from './timeline/image-post/image-post.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    MatTabsModule,
    ContentModule
  ],
  declarations: [
    HomeComponent,
    TimelineComponent,
    VideoPostComponent,
    ImagePostComponent
  ],
  providers: [
    HomeAuthResolver
  ]
})
export class HomeModule {}
