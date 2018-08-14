import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Title } from "@angular/platform-browser";
@Component({
	selector: 'blog-homepage',
	templateUrl: './bloghome.component.html'
})
export class BlogHomepageComponent {
	blogposts: any;
	constructor(private http: Http, title: Title) {
		title.setTitle("Chan4077.Github.io > Blog");
	}
	getBlogposts(): Observable<any> {
		return this.http.get("assets/blogposts.json")
			.map((res: any) => res.json());
	}
	ngOnInit() {
		this.getBlogposts().subscribe(data => this.blogposts = data, error => console.log(error));
	}
}