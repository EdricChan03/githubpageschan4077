import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';


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
  latestCommit: GithubCommit;
  latestCommitCommit: GithubCommitCommit;
  latestCommitCommitAuthor: GithubCommitCommitCommitter;
  constructor(private http: HttpClient) { }
  refresh() {
    this.isRefreshing = true;
    this.http.get<GithubCommit[]>('https://api.github.com/repos/Chan4077/githubpageschan4077/commits')
      .subscribe(res => {
        this.latestCommit = res[0];
        this.latestCommitCommit = res[0].commit;
        this.latestCommitCommitAuthor = res[0].commit.committer;
        this.isRefreshing = false;
      }, (err) => console.error(err));
    console.log(this.latestCommit);
  }
  ngOnInit() {
    this.refresh();
  }
}
interface GithubCommit {
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
}
