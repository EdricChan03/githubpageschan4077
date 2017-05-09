import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
@Component({
    selector: 'url-dialog',
    templateUrl: './urldialog.component.html'
})

export class UrlDialog implements OnInit {
    settings: any;
    isDarkTheme: boolean;
    url: string;
    openNewTab: boolean;
    constructor(public dialogRef: MdDialogRef<UrlDialog>) {}

    ngOnInit() {
        this.settings = JSON.parse(localStorage.getItem('settings')) || { 'isDarkTheme': true, 'name': 'Lorem ipsum', 'email': 'johnappleseed@gmail.com', 'birthday': '2003-12-23', 'showDeveloper': false };
        this.isDarkTheme = this.settings.isDarkTheme;
        this.url = this.dialogRef.componentInstance.url;
    }
}