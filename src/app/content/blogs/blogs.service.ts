import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MediumBlogsResponse } from './mediumblogs.model';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http: HttpClient) { }
  getBlogs() {
    return this.http.get<MediumBlogsResponse>('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mmkanwar');
  }
}
