export class Blog {
    id: number; // Unique identifier for the blog
    title: string; // Blog title
    content: string; // Blog content
    author: string; // Blog author
    publishDate: Date; // Date when the blog was published
    summary: string;
  
    constructor(
      id: number,
      title: string,
      content: string,
      author: string,
      publishDate: Date,
      summary: string
    ) {
      this.id = id;
      this.title = title;
      this.content = content;
      this.author = author;
      this.publishDate = publishDate;
      this.summary = summary;
    }
}