import { MdDialog } from '@angular/material';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UrlDialogService } from './../services/urldialog.service';
@Component({
    selector: 'projects',
    templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
    projectSelected: any;
    constructor(private router: Router, private urlDialogService: UrlDialogService, private dialog: MdDialog) { }
    projects = [
        {
            href: '/swift',
            hasIcon: true,
            icon: 'language-swift',
            name: 'First-Application',
            hasVer: true,
            ver: '1.0.0',
            hasPreVer: true,
            preVer: '1.0.0',
            hasDesc: true,
            desc: 'A test on Swift 3.0',
            githubUrl: 'https://github.com/Chan4077/First-Application',
            readmeUrl: 'https://github.com/Chan4077/First-Application/blob/master/README.md'
        },
        {
            href: '/mod',
            hasIcon: true,
            icon: 'minecraft',
            hasDesc: true,
            name: 'First-Mod',
            ver: '1.2.1',
            hasVer: true,
            hasPreVer: false,
            desc: 'My first mod. Run on 1.11.2!',
            githubUrl: 'https://github.com/Chan4077/First-Mod',
            readmeUrl: 'https://github.com/Chan4077/First-Mod/blob/master/README.md'
        },
        {
            href: '/md-todo',
            hasIcon: true, 
            icon: 'format-list-checks',
            name: 'Md-Todo',
            ver: 'null',
            hasVer: true,
            hasDesc: true,
            desc: 'AngularJS Material Todo extension <strong style="color:red">(WIP)</strong>',
            githubUrl: 'https://github.com/Chan4077/Md-Todo',
            readmeUrl: 'https://github.com/Chan4077/Md-Todo/blob/master/README.md'
        },
        {
            href: '/scripts-for-mac',
            hasIcon: true,
            icon: 'script',
            name: 'scripts-for-mac',
            hasVer: true,
            ver: 'null',
            hasDesc: true,
            desc: 'Scripts for mac',
            githubUrl: 'https://github.com/Chan4077/scripts-for-mac',
            readmeUrl: 'https://github.com/Chan4077/scripts-for-mac/blob/master/README.md'
        }
    ]
    viewWarnings() {
        this.dialog.open(WarningsDialog);
    }
    goToGithub(url) {
        this.urlDialogService.goToUrl(url);
    }
    selected(project) {
        this.projectSelected = project;
        localStorage.setItem('project-selected', JSON.stringify(this.projectSelected));
    }
    ngOnInit() {
        console.log(this.projects[0]);
        if (localStorage.getItem('project-selected')) {
            this.projectSelected = JSON.parse(localStorage.getItem('project-selected'));
        } else {
            this.projectSelected = this.projects[0];
        }
    }
}

@Component({
    selector: 'warnings-dialog',
    template:   `<md-icon svgIcon="alert"></md-icon><h2 md-dialog-title>Warnings</h2>
                <md-dialog-content>
                <ol>
                <li>Please note that table of contents links in READMEs will not work here. Please view on Github instead.</li>
                </ol>
                </md-dialog-content>
                <md-dialog-actions align="end">
                <button md-button md-dialog-close color="primary">Close</button>
                </md-dialog-actions>`
})
export class WarningsDialog {}