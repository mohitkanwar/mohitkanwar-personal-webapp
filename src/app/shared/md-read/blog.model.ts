export class Blog {
    id: number; // Unique identifier for the blog
    title: string; // Blog title
    content: string; // Blog content
    author: string; // Blog author
    publishDate: Date; // Date when the blog was published
    summary: string;
    metaDescription: string ;
    metaImagePath: string;
    tldr: string;
    speechText: string;
    constructor();
    constructor(
      id?: number,
      title?: string,
      content?: string,
      author?: string,
      publishDate?: Date,
      summary?: string,
      metaDescription?: string,
      metaImagePath?: string,
      tldr?: string,
      speechText?: string
    ) {
      this.id = id!=undefined?id:0;
      this.title = title!=undefined?title:'';
      this.content = content!=undefined?content:'';
      this.author = author!=undefined?author:'Mohit Kanwar';
      this.publishDate = publishDate?new Date(publishDate): new Date();
      this.summary = summary!=undefined? summary: '';
      this.metaDescription = metaDescription!=undefined? metaDescription:'';
      this.metaImagePath = metaImagePath!=undefined? metaImagePath: '';
      this.tldr = tldr!=undefined? tldr:'';
      this.speechText = speechText!=undefined?speechText:'';
    }
}