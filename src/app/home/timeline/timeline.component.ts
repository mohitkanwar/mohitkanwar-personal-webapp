import { Component, HostListener, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import postsdata from '../../../../src/assets/data/timeline-posts.json';
import { PostType } from '../PostType.enum';
import { TimelinePost } from '../timelinePost.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  posts: TimelinePost[] = new Array();
  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.loadPost(0);
    this.loadPost(1);
  }
  loadPost(indexToBeLoaded) {
    if (postsdata.posts.length > indexToBeLoaded - 1 ) {
      const timelinePost = new TimelinePost();
      timelinePost.id = postsdata.posts[indexToBeLoaded].id;
      timelinePost.date = new Date(postsdata.posts[indexToBeLoaded].date);
      timelinePost.description = postsdata.posts[indexToBeLoaded].description;
      timelinePost.host = postsdata.posts[indexToBeLoaded].host;
      timelinePost.link = this.sanitizer.bypassSecurityTrustResourceUrl(postsdata.posts[indexToBeLoaded].link);
      timelinePost.title = postsdata.posts[indexToBeLoaded].title;
      timelinePost.type = (<any>PostType)[postsdata.posts[indexToBeLoaded].type.toUpperCase()];
      this.posts.push(timelinePost);
    }

  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    const max = document.documentElement.scrollHeight;
    if (pos === max) {
      this.loadPost(this.posts.length);
    }
  }
}
