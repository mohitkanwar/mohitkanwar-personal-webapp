import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../md-read/blog.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MdReadService {
  constructor(private httpClient : HttpClient) { }
  readBlog(path: string): Observable<Blog> {
    return this.httpClient.get<Blog>('assets/blogs/' + path + '.json', { responseType: 'json' });
  }
}
