import { Router, NavigationEnd } from '@angular/router';
import { Component, AfterViewInit, AfterViewChecked, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { OverlayContainer } from '@angular/cdk/overlay';
import { SettingsDialog } from './dialogs/settingsdialog.component';
import { ShareDialog } from './dialogs/sharedialog.component';
import { ExperimentsDialog } from './dialogs/experimentsdialog.component';
import { UrlDialogService } from './services/urldialog.service';
declare let ga;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit, AfterViewChecked, AfterContentChecked {
  scrollToTopBtn: HTMLElement;
  showingToolbar = true;
  defaultSettings: any;
  defaultExperiments: any;
  debugMode: boolean;
  shareDialog = false;
  experiments: any;
  showScrollToTop = false;
  settings: any;
  links = [
    { icon: 'home', href: '/home', name: 'Home' },
    { icon: 'blogger', href: '/blog', name: 'Beta Blog' },
    { icon: 'alert-octagon', href: '/status', name: 'Status' }
  ];
  docName = document.title;
  loading = true;
  constructor(
    public dialog: MatDialog,
    public snackbar: MatSnackBar,
    private urlDialogService: UrlDialogService,
    public router: Router,
    private cdr: ChangeDetectorRef,
    private overlayContainer: OverlayContainer
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    });
  }
  /**
   * Opens the settings dialog
   */
  openSettings() {
    const dialogRef = this.dialog.open(SettingsDialog, { disableClose: true });
    dialogRef.afterClosed().subscribe(result => {
      if (result instanceof Array || result instanceof Object) {
        console.dir(JSON.stringify(result));
        localStorage.setItem('settings', JSON.stringify(result));
        console.log('User clicked save. Saving settings to localStorage...');
        this.snackbar.open('Preferences saved. Reloading in 3 seconds...', 'Undo', { duration: 5000 });
        setTimeout(() => {
          // Force reload after 3 seconds
          window.location.reload();
        }, 3000);
      } else if (result === 'cancel') {
        // Sets localStorage settings to value on `ngOnInit()`
        localStorage.setItem('settings', JSON.stringify(this.settings));
        console.log('User clicked cancel. Reverting to initial settings in localStorage.');
        this.snackbar.open('Settings were reverted', null, { duration: 5000 });
      } else if (result === 'clear') {
        // Do nothing as it is already handled in settingsdialog.component.ts under `clearSettings()`
        console.log('Settings cleared!');
        this.snackbar.open('Settings cleared! Reloading in 3 seconds...', null, { duration: 3000 });
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    });
  }
  /**
   * Opens the experiment dialog
   */
  openExperiments() {
    const dialogRef = this.dialog.open(ExperimentsDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.snackbar.open('Experiments saved. Reloading in 3 seconds...');
      setTimeout(() => {
        // Force reload after 3 seconds
        window.location.reload();
      }, 3000);
    });
  }
  /**
   * Shares the current web page
   */
  share() {
    this.dialog.open(ShareDialog);
  }
  /**
   * Goes to a specified url
   * @param link The URL to go to
   */
  goToUrl(link: string | any) {
    if (link instanceof Object || link instanceof Array) {
      // tslint:disable-next-line:no-bitwise
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
  /**
   * Sends feedback
   */
  sendFeedback() {
    this.router.navigate(['/feedback']);
  }
  /**
   * Scrolls to the top
   * @note This requirws an element with an id of conrent to be present
   */
  scrollToTop() {
    console.log('Scrolling to top...');
    document.getElementById('content').scrollIntoView();
  }
  /**
   * Updates the connection status
   * @description Shows a snackbar stating that user is online/offline
   * @param isOnline Whether the user is online
   */
  updateConnectionStatus(isOnline: boolean): void {
    if (navigator.onLine && isOnline) {
      console.log('Connection is online');
      this.snackbar.open('Connection is online!', null, { duration: 5000 });
    } else {
      console.log('Connection is offline');
      const snackbarRef = this.snackbar.open('Connection is offline!', 'Retry', { duration: 5000 });
      // Called when the user clicks on the retry button
      snackbarRef.onAction().subscribe(() => {
        // Reloads
        window.location.reload();
      });
    }
  }
  ngAfterViewInit() {
    this.defaultSettings = { customTheme: 'indigo-pink', durationToast: 1000, openNewTab: false, showScrollToTop: false };
    this.defaultExperiments = { shareDialog: true };
    // Sets settings to either parsed JSON of localStorage `settings`
    this.debugMode = JSON.parse(localStorage.getItem('debugMode'));
    this.settings = JSON.parse(localStorage.getItem('settings')) || this.defaultSettings;
    this.experiments = JSON.parse(localStorage.getItem('experiments')) || this.defaultExperiments;
    // Theming
    const htmlEl = document.getElementById('root');
    if (this.settings.customTheme) {
      htmlEl.className = this.settings.customTheme;
      this.overlayContainer.getContainerElement().className = this.settings.customTheme;
    } else {
      htmlEl.className = 'indigo-pink';
      this.overlayContainer.getContainerElement().className = 'indigo-pink';
    }

    if (this.settings.showScrollToTop || false) {
      // Shows the scroll to top button if user checked the checkbox in the SettingsDialog
      this.showScrollToTop = true;
    } else {
      this.showScrollToTop = false;
    }
    console.dir('Settings: ' + JSON.stringify(this.settings));
    window.addEventListener('load', () => {
      console.log('Loaded!');

    });
    window.addEventListener('online', () => {
      this.updateConnectionStatus(true);
    }, false);
    window.addEventListener('offline', () => {
      this.updateConnectionStatus(false);
    }, false);

    const els = document.querySelectorAll('code');
    els.forEach((el) => {
      el.setAttribute('highlight', null);
    });
  }
  ngAfterViewChecked() {
    this.scrollToTopBtn = document.getElementById('scroll-to-top-btn');
    if (this.experiments.shareDialog || false) {
      if (this.settings.showScrollToTop) {
        // Shows the share dialog button
        setTimeout(() => {
          const cssString = 'bottom: 95px; z-index: 1;';
          this.scrollToTopBtn.style.cssText = cssString;
        }, 2000);
      } else {
      }
      this.shareDialog = true;
    }
    this.cdr.detectChanges();
  }
  ngAfterContentChecked() {
    if (this.router.url.indexOf('blog') > -1) {
      this.showingToolbar = false;
    } else {
      this.showingToolbar = true;
    }
  }
}
