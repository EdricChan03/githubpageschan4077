import { Component, NgModule } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'blog-status-update-1',
  templateUrl: '2017-08-24-status-update-1.html'
})
// tslint:disable-next-line:component-class-suffix
export class BlogStatusUpdate1 {}

@Component({
  selector: 'blog-deprecating-githubpageschan4077',
  templateUrl: '2019-02-09-deprecating-githubpageschan4077.html'
})
// tslint:disable-next-line:component-class-suffix
export class BlogDeprecatingGitHubPagesChan4077 {}

export interface Blogpost {
  excerpt: SafeHtml | string;
  date: Date | string;
  title: string;
  url: string;
  tags?: BlogpostTags[];
  icon?: string;
  component?: string;
  isLatest?: boolean;
}
export interface BlogpostTags {
  name: string;
}

@NgModule({
  declarations: [
    BlogStatusUpdate1,
    BlogDeprecatingGitHubPagesChan4077
  ],
  exports: [
    BlogStatusUpdate1,
    BlogDeprecatingGitHubPagesChan4077
  ],
  entryComponents: [
    BlogStatusUpdate1,
    BlogDeprecatingGitHubPagesChan4077
  ]
})
export class BlogPostModule {}
