import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'url-dialog',
  templateUrl: './urldialog.component.html'
})
// tslint:disable-next-line:component-class-suffix
export class UrlDialog implements OnInit {
  settings: any;
  isDarkTheme: boolean;
  url: string;
  openNewTab: boolean;
  constructor(public dialogRef: MatDialogRef<UrlDialog>) {}

  ngOnInit() {
    this.settings = JSON.parse(localStorage.getItem('settings')) || { isDarkTheme: true, showDeveloper: false };
    this.isDarkTheme = this.settings.isDarkTheme;
    this.url = this.dialogRef.componentInstance.url;
  }
}
