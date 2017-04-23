import { Router, NavigationEnd } from '@angular/router';
import { Component, AfterViewInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { MdDialog, MdSnackBar, OverlayContainer } from '@angular/material';
import { SendFeedbackDialog } from './dialogs/sendfeedback.component';
import { SettingsDialog } from './dialogs/settingsdialog.component';
import { ShareDialog } from './dialogs/sharedialog.component';
import { ExperimentsDialog } from './dialogs/experimentsdialog.component';
import { UrlDialogService } from './services/urldialog.service';
declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit, AfterViewChecked {
  scrollToTopBtn: HTMLElement;
  constructor(public dialog: MdDialog, public snackbar: MdSnackBar, private urlDialogService: UrlDialogService, public router: Router, private cdr: ChangeDetectorRef, private overlayContainer: OverlayContainer) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    })
  }
  debugMode: boolean;
  shareDialog: boolean;
  experiments: any;
  showScrollToTop: boolean = false;
  settings: any;
  title = 'app works!';
  links = [
    { icon: 'home', href: '/home', name: 'Home' },
    { icon: 'information', href: '/about', name: 'About' },
    { icon: 'flask', href: '/projects', name: 'Projects' }
  ]
  docName = document.title;
  loading: boolean = true;
  onScroll(e) {
    // if ()
  }
  openSettings() {
    let dialogRef = this.dialog.open(SettingsDialog, { disableClose: true });
    dialogRef.afterClosed().subscribe(result => {
      if (result instanceof Array || result instanceof Object) {
        console.dir(JSON.stringify(result));
        localStorage.setItem('settings', JSON.stringify(result));
        console.log('User clicked save. Saving settings to localStorage...');
        this.snackbar.open('Preferences saved. Reloading in 3 seconds...', 'Undo', { duration: 5000 });
        setTimeout(() => {
          // Force reload after 3 seconds
          window.location.reload(true);
        }, 3000)
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
  openExperiments() {
    let dialogRef = this.dialog.open(ExperimentsDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.snackbar.open('Experiments saved. Reloading in 3 seconds...');
      setTimeout(() => {
        // Force reload after 3 seconds
        window.location.reload(true);
      }, 3000)
    })
  }
  share() {
    this.dialog.open(ShareDialog);
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
    } else if (typeof link === 'string') {
      this.urlDialogService.goToUrl(link);
    }
  }
  sendFeedback(feedback: any) {
    let dialogRef = this.dialog.open(SendFeedbackDialog, { disableClose: true });
    // Check if feedback exists, is undefined, or null
    if (feedback || feedback == undefined || feedback == null) {
      console.log('No `feedback` input specified.');
      dialogRef.componentInstance.feedback = { name: '', feedback: '', sendViaEmail: false, type: '', email: '' };
    } else {
      console.log('`feedback` input specified as: ' + feedback);
      dialogRef.componentInstance.feedback = feedback;
    }
    dialogRef.afterClosed().subscribe(result => {
      // If result is null or undefined
      if (result == null || result == undefined) {
        this.snackbar.open('Feedback cancelled', 'Undo', { duration: 5000 });
      }
    })
  }
  scrollToTop() {
    console.log('Scrolling to top...');
    document.getElementById('content').scrollIntoView();
  }
  ngAfterViewInit() {
    // Sets settings to either parsed JSON of localStorage `settings`
    this.debugMode = JSON.parse(localStorage.getItem('debugMode'));
    this.settings = JSON.parse(localStorage.getItem('settings'));
    this.experiments = JSON.parse(localStorage.getItem('experiments'));

    // Theming
    var htmlEl = document.getElementById('root');
    htmlEl.className = this.settings.customTheme;
    this.overlayContainer.themeClass = this.settings.customTheme;

    if (this.settings.showScrollToTop) {
      // Shows the scroll to top button if user checked the checkbox in the SettingsDialog
      this.showScrollToTop = true;
    } else {
      this.showScrollToTop = false;
    }
    console.debug(JSON.stringify('Settings: ' + this.settings));
  }
  ngAfterViewChecked() {
    this.scrollToTopBtn = document.getElementById('scroll-to-top-btn');
    if (this.experiments.shareDialog) {
      // Shows the share dialog button
      setTimeout(() => {
        var cssString = "bottom: 95px; z-index: 1;";
        this.scrollToTopBtn.style.cssText = cssString;
        this.shareDialog = true;
      }, 2000)
    } else {
      // Set styles for second button
      // var cssString = "";
      // scrollToTopBtn.style.cssText = cssString;
      // Don't show the share dialog button
      this.shareDialog = false;

    }
    this.cdr.detectChanges();
  }
}
