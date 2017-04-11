import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UrlDialogService } from './../services/urldialog.service';
@Component({
    selector: 'projects',
    templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit{
    projectSelected: any;
    constructor(private router: Router, private urlDialogService: UrlDialogService) {}
    projects = [
        {href: '/swift', icon: 'language-swift', hasIcon: true, name: 'First-Application', hasDesc: true, desc: 'A test on Swift 3.0', githubUrl: 'https://github.com/Chan4077/First-Application', readmeUrl: 'https://github.com/Chan4077/First-Application/blob/master/README.md'},
        {href: '/mod', icon: 'minecraft', hasIcon: true, name: 'First-Mod', hasDesc: true, desc: 'My first mod. Run on 1.11.2!', githubUrl: 'https://github.com/Chan4077/First-Mod', readmeUrl: 'https://github.com/Chan4077/First-Mod/blob/master/README.md'}
    ]
    goToGithub(url) {
        this.urlDialogService.goToUrl(url);
    }
    selected(project) {
        this.projectSelected = project;
        localStorage.setItem('project-selected', JSON.stringify(this.projectSelected));
    }
    ngOnInit() {
    this.projectSelected = JSON.parse(localStorage.getItem('project-selected'));
    }
}