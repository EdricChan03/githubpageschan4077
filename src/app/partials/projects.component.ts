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
    /**
     * All of the projects
     * @todo Make this dynamic
     * @version 1.0.1
     * @type Array
     */
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
        },
        {
            href: '/market2',
            hasIcon: true,
            icon: 'cart',
            name: 'Market2',
            hasVer: false,
            hasDesc: true,
            desc: 'Market 2 (Angular Material 2 and Angular 4) <a href="https://market2-ed1e4.firebaseapp.com" class="link-overwrite">Link</a>',
            githubUrl: 'https://github.com/Chan4077/market2',
            readmeUrl: 'https://github.com/Chan4077/market2/blob/master/README.md'
        },
        {
            href: '/material2-docs',
            hasIcon: true,
            icon: 'angular',
            name: 'Material2 Docs',
            hasVer: false,
            hasDesc: true,
            desc: 'Angular Material 2 Docs. <strong>NOTE:</strong> This is <em>unofficial</em>. Please refer to the <a href="https://material.angular.io" class="link-overwrite">official docs</a> instead.',
            githubUrl: 'https://github.com/Chan4077/material2-docs',
            readmeUrl: 'https://github.com/Chan4077/material2-docs/blob/master/README.md'
        }
    ]
    /**
     * Opens the warning dialog
     * @todo Add more content to the dialog
     * @version 1.0.2
     * @return {void}
     */
    viewWarnings() {
        this.dialog.open(WarningsDialog);
    }
    /**
     * Goes to the github url specified
     * @param {string} url The url to go to
     * @return {void}
     */
    goToGithub(url) {
        this.urlDialogService.goToUrl(url);
    }
    /**
     * Selects the project
     * @param {any} project The project selected
     * @todo Remove this
     * @return {void}
     */
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
/**
 * The warning dialog component
 * @type Component
 * @version 1.0.2
 */
@Component({
    selector: 'warnings-dialog',
    template: `<h2 md-dialog-title>Warnings</h2>
                <md-dialog-content>
                <ol>
                  <li>Please note that table of contents links in READMEs will not work here. Please view on Github instead.</li>
                  <li>Also note that code will also not be formatted (at least for now), Please view on Github instead.</li>
                </ol>
                </md-dialog-content>
                <md-dialog-actions align="end">
                <button md-button md-dialog-close color="primary">Close</button>
                </md-dialog-actions>`
})
export class WarningsDialog { }