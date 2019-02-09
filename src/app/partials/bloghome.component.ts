import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Title } from '@angular/platform-browser';
import { Blogpost } from 'assets/blogposts/app.blogposts';
@Component({
  selector: 'blog-homepage',
  templateUrl: './bloghome.component.html'
})
export class BlogHomepageComponent implements OnInit {
  blogposts: Blogpost[];
  constructor(private http: HttpClient, title: Title) {
    title.setTitle('Chan4077.Github.io > Blog');
  }
  getBlogposts(): Observable<Blogpost[]> {
    return this.http.get<Blogpost[]>('assets/blogposts.json');
  }
  ngOnInit() {
    this.getBlogposts().subscribe(data => this.blogposts = data, error => console.log(error));
  }
}
