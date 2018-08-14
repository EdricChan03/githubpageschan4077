/**
 * @license
 * MIT License
 * Copyright (c) 2017 Edric Chan
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import { Http } from '@angular/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
/**
 * @description This is meant for the status of the website and to show the latest commit.
 * @beta
 */
@Component({
	selector: 'app-status',
	templateUrl: './status.component.html'
})
export class StatusComponent implements OnInit {
	isRefreshing: boolean;
		/**
	 * The latest commit json
	 * @todo Remove the following after
	 */
	latestCommit: any;
	/**
	 * @todo Remove
	 */
	latestCommitCommit: any;
	/**
	 * @todo Remove
	 */
	latestCommitCommitAuthor: any;
	constructor(private http: Http) { }
	/**
	 * Refreshes the commit
	 */
	refresh() {
		this.isRefreshing = true;
		this.http.get("https://api.github.com/repos/Chan4077/githubpageschan4077/commits")
			.map(res => res.json())
			.subscribe(res => {
				this.latestCommit = res[0];
				this.latestCommitCommit = res[0].commit;
				this.latestCommitCommitAuthor = res[0].commit.committer;
				this.isRefreshing = false;
			}, (err)=> console.error(err));
		console.log(this.latestCommit);
	}
	ngOnInit() {
		this.refresh();
	}
}
/* interface GithubCommit {
	sha: string;
	commit: GithubCommitCommit;
	html_url: string;
}
interface GithubCommitCommit {
	committer: GithubCommitCommitCommitter;
	message: string;
	comment_count?: number;
}
interface GithubCommitCommitCommitter {
	name: string;
	email?: string;
	date: Date | any;
} */