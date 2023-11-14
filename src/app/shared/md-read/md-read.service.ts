import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from './blog.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MdReadService {
  constructor(private httpClient : HttpClient) { }
  readBlog(path: string): Observable<Blog> {
    return this.httpClient.get('assets/md/' + path + '.md', { responseType: 'text' }).pipe(
      map((data: string) => {
        const meta = this.extractMeta(data.split('---')[0]);
        const blogContent = data.split('---')[1];
        const paragraphs = blogContent.split('\n\n');
        let content = this.extractContent(paragraphs);
        let metaDescription = meta['metadescription'];
        let metaImage = meta['metaimage'];

        let author =  meta['author'] ?? 'Mohit Kanwar';
        let tldr = meta['tldr'];
        return new Blog(0, meta['title'], content, author, meta['date'], paragraphs[1],metaDescription,metaImage, tldr);
      })
    );
  }
  extractMeta(data: string) {
    const keyValuePairs = data.split("\n");
    const jsonObject : { [key: string]: any } = {};
      keyValuePairs.forEach((pair) => {
        if(pair.indexOf(":")>1) {
          const [key, value] = pair.split(":");
          jsonObject[key] = value.trim();
        }
        
      });
      return jsonObject;
  }
  private extractContent(paragraphs: string[]) {
    return paragraphs.slice(1).join("\n\n");
  }

}
