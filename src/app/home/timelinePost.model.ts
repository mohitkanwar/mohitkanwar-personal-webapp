import { SafeResourceUrl } from '@angular/platform-browser';
import { URL } from 'node:url';
import { PostType } from './PostType.enum';

export class TimelinePost {
    id: number;
    date: Date;
    type: PostType;
    host: string;
    link: SafeResourceUrl;
    title: string;
    description: string;
}
