import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
@Component({
	selector: 'blogpost-viewer',
	templateUrl: './blogpostviewer.component.html'
})
export class BlogPostViewerComponent implements OnInit {
	blogpost: any;
	docTitle: string = document.title;
	constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
	getBlogPost(id: string): string {
		let htmlFile = new XMLHttpRequest();
		htmlFile.open()
	}
	goBack() {
		this.router.navigate(['/blog']);
	}
	ngOnInit() {
		this.activatedRoute.paramMap.switchMap((params: ParamMap) =>
			this.getBlogPost(params.get('id'))
		)
			.subscribe((content: any) => this.blogpost = content;)
	}
}