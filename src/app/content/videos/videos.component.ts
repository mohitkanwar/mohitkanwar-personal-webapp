import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {


  videoList: Video[];
  selectedIndex;
  constructor(private sanitizer: DomSanitizer) {
    this.videoList = new Array();
    this.selectedIndex = 0;
  }
  ngOnInit(): void {
    this.videoList.push(
      {
       src: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/yQGUDOGRWrg'),
       title : 'RSG Pune'
      });
  }

}
class Video {
  src: SafeResourceUrl;
  title: string;
}
