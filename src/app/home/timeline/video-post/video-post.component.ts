import { Component, Input, OnInit } from '@angular/core';
import { TimelinePost } from '../../timelinePost.model';

@Component({
  selector: 'app-video-post',
  templateUrl: './video-post.component.html',
  styleUrls: ['./video-post.component.css']
})
export class VideoPostComponent implements OnInit {

  @Input() post: TimelinePost;
  isLoading = true;
  constructor() { }

  ngOnInit(): void {
  }

}
