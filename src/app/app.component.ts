import { Router, NavigationEnd } from '@angular/router';
import { Component, AfterViewInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { MdDialog, MdSnackBar, OverlayContainer } from '@angular/material';
import { SettingsDialog } from './dialogs/settingsdialog.component';
import { ShareDialog } from './dialogs/sharedialog.component';
import { ExperimentsDialog } from './dialogs/experimentsdialog.component';
import { UrlDialogService } from './services/urldialog.service';
declare let window: Window;
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
	defaultSettings: any;
	defaultExperiments: any;
	debugMode: boolean;
	shareDialog: boolean = false;
	experiments: any;
	showScrollToTop: boolean = false;
	settings: any;
	links = [
		{ icon: 'home', href: '/home', name: 'Home' },
		{ icon: 'blogger', href: '/blog', name: 'Beta Blog' }
	]
	docName = document.title;
	loading: boolean = true;
	onScroll(e) {
		// if ()
	}
	/**
	 * Opens the settings dialog
	 * @example <caption>Opening the dialog in html</caption>
	 * <code>
	 *  <button md-button (click)="openSettings()">Open Settings</button>
	 * </code>
	 * @return {void}
	 */
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
				this.snackbar.open('Settings cleared! Reloading in 3 seconds...', null, { duration: 3000 });
				setTimeout(() => {
					window.location.reload(true);
				}, 3000)
			}
		})
	}
	/**
	 * Opens the experiment dialog
	 * @example <caption>Opening the dialog in html</caption>
	 * <button md-button (click)="openExperiments">Open Experiment Dialog</button>
	 * @return {void}
	 */
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
	sendFeedback() {
		if (confirm("Please note that you have to have a Github account. If you don't have one, go to https://github.com.")) {
			window.open("https://github.com/Chan4077/githubpageschan4077/issues/new?body=Reported%20from%20send%20feedback")
		}
	}
	scrollToTop() {
		console.log('Scrolling to top...');
		document.getElementById('content').scrollIntoView();
	}
	/**
   * Updates the connection status
   * @description Shows a snackbar stating that user is online/offline
   * @param isOnline {boolean} If online
   * @author Edric Chan
   * @version 1.0.2
   */
	updateConnectionStatus(isOnline: boolean): void {
		if (navigator.onLine && isOnline) {
			console.log('Connection is online');
			this.snackbar.open('Connection is online!', null, { 'duration': 5000 });
		} else {
			console.log('Connection is offline');
			this.snackbar.open('Connection is offline!', null, { 'duration': 5000 });
		}
	}

	ngAfterViewInit() {
		this.defaultSettings = { "customTheme": "indigo-pink", "durationToast": 1000, "openNewTab": false, "showScrollToTop": false };
		this.defaultExperiments = { "shareDialog": true };
		// Sets settings to either parsed JSON of localStorage `settings`
		this.debugMode = JSON.parse(localStorage.getItem('debugMode'));
		this.settings = JSON.parse(localStorage.getItem('settings')) || this.defaultSettings;
		this.experiments = JSON.parse(localStorage.getItem('experiments')) || this.defaultExperiments;
		// Theming
		var htmlEl = document.getElementById('root');
		if (this.settings.customTheme) {
			htmlEl.className = this.settings.customTheme;
			this.overlayContainer.themeClass = this.settings.customTheme;
		} else {
			htmlEl.className = 'indigo-pink';
			this.overlayContainer.themeClass = 'indigo-pink';
		}

		if (this.settings.showScrollToTop || false) {
			// Shows the scroll to top button if user checked the checkbox in the SettingsDialog
			this.showScrollToTop = true;
		} else {
			this.showScrollToTop = false;
		}
		console.dir('Settings: ' + JSON.stringify(this.settings));
		window.addEventListener("load", () => {
			console.log('Loaded!');

		})
		window.addEventListener("online", () => {
			this.updateConnectionStatus(true);
		}, false);
		window.addEventListener("offline", () => {
			this.updateConnectionStatus(false);
		}, false);

		var els = document.querySelectorAll('code');
		for (var i = 0; i < els.length; i++) () => {
			els[i].setAttribute("highlight", null);
		}
	}
	ngAfterViewChecked() {
		this.scrollToTopBtn = document.getElementById('scroll-to-top-btn');
		if (this.experiments.shareDialog || false) {
			if (this.settings.showScrollToTop) {
				// Shows the share dialog button
				setTimeout(() => {
					var cssString = "bottom: 95px; z-index: 1;";
					this.scrollToTopBtn.style.cssText = cssString;
				}, 2000)
			} else {
			}
			this.shareDialog = true;
		}
		this.cdr.detectChanges();
	}
}