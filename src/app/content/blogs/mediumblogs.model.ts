export class MediumBlogsResponse {
    status: string;
    feed: Feed;
    items: BlogItem[];
}

class Feed {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
}
class BlogItem {
    title: string;
    pubDate: Date;
    link: string;
    guid: string;
    author: string;
    thumbnail: string;
    description: string;
    content: string;
    categories: string[];
}
