import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material';
import { SendFeedbackDialog } from './dialogs/sendfeedback.component';
import { SettingsDialog } from './dialogs/settingsdialog.component';
import { UrlDialogService } from './services/urldialog.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(public dialog: MdDialog, public snackbar: MdSnackBar, private urlDialogService: UrlDialogService, private router: Router) {
    router.events.subscribe(()=> {
      setTimeout(() => {
        this.loading = false;
      }, 2000)
    })
  }
  settings: any;
  title = 'app works!';
  links = [
    { icon: 'home', href: '/home', name: 'Home' },
    { icon: 'information', href: '/about', name: 'About'},
    { icon: 'blogger', href: 'https://chanziyangedric.blogspot.com', name: 'Blog'},
    { icon: 'github-circle', href: 'https://github.com/Chan4077/chan4077.github.io', name: 'View on Github'},
    { icon: 'flask', href: '/projects', name: 'Projects'}
  ]
  docName = document.title;
  loading: boolean = true;
  openSettings() {
    let dialogRef = this.dialog.open(SettingsDialog, { disableClose: true });
    dialogRef.afterClosed().subscribe(result => {
      if (result instanceof Array || result instanceof Object) {
        console.dir(JSON.stringify(result));
        localStorage.setItem('settings', JSON.stringify(result));
        console.log('User clicked save. Saving settings to localStorage...');
        this.snackbar.open('Preferences saved.', 'Undo', { duration: 5000 });
      } else if (result == 'cancel') {
        // Sets localStorage settings to value on `ngOnInit()`
        localStorage.setItem('settings', JSON.stringify(this.settings));
        console.log('User clicked cancel. Reverting to initial settings in localStorage.');
        this.snackbar.open('Settings were reverted', null, { duration: 5000 });
      } else if (result == 'clear') {
        // Do nothing as it is already handled in settingsdialog.component.ts under `clearSettings()`
        console.log('Settings cleared!');
      }
    })
  }
  goToUrl(link: any) {
    console.log(link);
    if (link instanceof Object || link instanceof Array) {
    if (~link.href.indexOf('https:') || ~link.href.indexOf('http:') || ~link.href.indexOf('www')) {
      console.log('URL clicked is an external url.');
      this.urlDialogService.goToUrl(link.href);
    } else {
      console.log('URL clicked is not a external url.');
    }
    } else if (typeof link === 'string'){
      this.urlDialogService.goToUrl(link);
    }
  }
  sendFeedback(feedback: any) {
    let dialogRef = this.dialog.open(SendFeedbackDialog, { disableClose: true });
    if (feedback || feedback == undefined || feedback == null) {
      console.log('No `feedback` input specified.');
      dialogRef.componentInstance.feedback = { name: '', feedback: '', sendViaEmail: false, type: '', email: '' };
    } else {
      console.log('`feedback` input specified as: ' + feedback);
      dialogRef.componentInstance.feedback = feedback;
    }
    dialogRef.afterClosed().subscribe(result => {
      if (result == null || result == undefined) {
        this.snackbar.open('Feedback cancelled', 'Undo', { duration: 5000 });
      } else {

      }
    })
  }
  scrollToTop() {
    console.log('Scrolling to top...');
    console.log(window);
    document.getElementById('content').scrollIntoView();
    window.scrollTo(0,0);
  }
  ngOnInit() {
    // Sets settings to either parsed JSON of localStorage `settings`
    this.settings = JSON.parse(localStorage.getItem('settings'));
    console.debug(JSON.stringify(this.settings));
  }
}
