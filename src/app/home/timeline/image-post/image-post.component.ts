import { Component, Input, OnInit } from '@angular/core';
import { TimelinePost } from '../../timelinePost.model';

@Component({
  selector: 'app-image-post',
  templateUrl: './image-post.component.html',
  styleUrls: ['./image-post.component.css']
})
export class ImagePostComponent implements OnInit {
  @Input() post: TimelinePost;
  constructor() { }

  ngOnInit(): void {
  }

}
