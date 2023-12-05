import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  constructor(private httpClient : HttpClient) { }
  readBlog(path: string): Observable<string> {

    let file = this.httpClient.get('assets/tutorials/' + path + '.md', { responseType: 'text' });
      return file;   
  }
}