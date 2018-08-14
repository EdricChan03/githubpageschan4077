import { SafeHtml } from '@angular/platform-browser';
import { Component, Type, NgModule } from '@angular/core';

@Component({
	selector: 'blog-rss-reader',
	templateUrl: '2017-08-05-introducing-rss-reader.html'
})
export class BlogRSSReader {}

@Component({
	selector: 'blog-status-update-1',
	templateUrl: '2017-08-24-status-update-1.html'
})
export class BlogStatusUpdate1 {}

export interface Blogpost {
	shortenedContent: SafeHtml | string | any;
	date: Date | string;
	title: string;
	url: string;
	component?: Type<any> | any;
	tags: BlogpostTags[];
}
export interface BlogpostTags {
	name: string;
}

@NgModule({
	declarations: [
		BlogRSSReader,
		BlogStatusUpdate1
	],
	exports: [
		BlogRSSReader,
		BlogStatusUpdate1
	],
	entryComponents: [
		BlogRSSReader,
		BlogStatusUpdate1
	]
})
export class BlogPostModule {}