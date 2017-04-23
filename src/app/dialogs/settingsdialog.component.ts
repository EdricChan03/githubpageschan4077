import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'settings-dialog',
  templateUrl: './settingsdialog.component.html'
})

export class SettingsDialog implements OnInit {
  settings: any;
  // Warn will be set as orange by default
  themes = [
    {value: 'indigo-pink', displayText: 'Indigo pink'},
    {value: 'blue-pink', displayText: 'Blue pink'},
    // TODO: Change colour of accent
    {value: 'yellow-green', displayText: 'Yellow green (dark)'}
  ]
  constructor(public dialogRef: MdDialogRef<SettingsDialog>) {}
  clearSettings(): void {
    if (confirm('Are you sure you want to clear settings? This cannot be undone!')) {
    console.log('Clearing...');
    localStorage.removeItem('settings');
    } else {
      console.log('User cancelled');
    }
  }
  ngOnInit(): void {
    this.settings = JSON.parse(localStorage.getItem('settings')) || {'isDarkTheme': false, 'openNewTab': false, 'showScrollToTop': true, 'durationToasts': 1000, 'customTheme': 'indigo-pink'};
  }
}