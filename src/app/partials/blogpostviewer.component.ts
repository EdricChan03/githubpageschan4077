import { BlogRSSReader, BlogStatusUpdate1 } from '../../assets/blogposts/app.blogposts';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, Type, ViewChild, ComponentFactory } from '@angular/core';
import 'rxjs/add/operator/switchMap';
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
		private http: Http,
		private componentFactoryResolver: ComponentFactoryResolver,
		private viewContainerRef: ViewContainerRef
	) { }
	getBlogPosts(): Observable<any> {
		return this.http.get('./assets/blogposts.json').map(res => res.json());
	}
	resolveComponent(component: Type<any>): ComponentFactory<any> {
		return this.componentFactoryResolver.resolveComponentFactory(component);
	}
	goBack() {
		this.router.navigate(['/blog']);
	}
	// checkBlogPost(id: string) {
	// 	return id === this.blogpostId;
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
		this.getBlogPosts().subscribe((res: Array<any>) => {
			console.log(res);
			for (let i = 0; i < res.length; i++) {
				if (res[i].url.indexOf(this.blogpostId) > -1) {
					console.log('YES!' + res[i].title);
					this.currentBreadCrumb = res[i].title;
				}
			}
			// this.currentBreadCrumb = res.find(this.checkBlogPost);
			// this.currentBreadCrumb
		})
		console.log('TODO');
		this.blogpost.createComponent(this.ref)
			.changeDetectorRef.detectChanges();
	}
}
