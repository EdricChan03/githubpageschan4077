import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactory, ComponentFactoryResolver, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogRSSReader, BlogStatusUpdate1, Blogpost } from '../../assets/blogposts/app.blogposts';

@Component({
  selector: 'blogpost-viewer',
  templateUrl: './blogpostviewer.component.html'
})
export class BlogPostViewerComponent implements OnInit {
  @ViewChild('blogpost', { read: ViewContainerRef }) blogpost: ViewContainerRef;
  currentBreadCrumb: string;
  blogpostId: string;
  ref: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }
  getBlogPosts(): Observable<Blogpost[]> {
    return this.http.get<Blogpost[]>('./assets/blogposts.json');
  }
  resolveComponent(component: Type<any>): ComponentFactory<any> {
    // TODO(Edric): Convert to use the Angular CDK Portal
    return this.componentFactoryResolver.resolveComponentFactory(component);
  }
  goBack() {
    this.router.navigate(['/blog']);
  }
  // checkBlogPost(id: string) {
  //  return id === this.blogpostId;
  // }
  ngOnInit() {
    this.blogpostId = this.activatedRoute.snapshot.paramMap.get('id');
    switch (this.blogpostId) {
      case '2017-08-05-introducing-rss-reader':
        this.ref = this.resolveComponent(BlogRSSReader);
        break;
      case '2017-08-24-status-update-1':
        this.ref = this.resolveComponent(BlogStatusUpdate1);
        break;
    }
    this.getBlogPosts().subscribe(blogPosts => {
      blogPosts.forEach(blogPost => {
        if (blogPost.url.indexOf(this.blogpostId) > -1) {
          this.currentBreadCrumb = blogPost.title;
        }
      });
    });
    this.blogpost.createComponent(this.ref)
      .changeDetectorRef.detectChanges();
  }
}
