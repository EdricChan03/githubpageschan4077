import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { MdSnackBar, MdDialog } from '@angular/material';

// UrlDialog
import { UrlDialog } from '../dialogs/urldialog.component';
@Injectable()
export class UrlDialogService {
    settings: any = JSON.parse(localStorage.getItem('settings')) || {};
    constructor(private snackbar: MdSnackBar, private dialog: MdDialog) { }
    /**
     * Goes to a url
     * @version 1.0.0
     * @author Edric Chan
     * @param {url:string} The url to go to
     * @returns null
     */
    public goToUrl(url: string): void {
        console.debug('URL is: ' + url);
        let dialogRef = this.dialog.open(UrlDialog);
        dialogRef.componentInstance.url = url;
        dialogRef.afterClosed().subscribe(result => {
            if (result == 'cancel') {
                // Do nothing
                this.snackbar.open('You cancelled the redirect', null, { duration: 5000 });
            } else if (result == 'redirect') {
                if (this.settings.openNewTab) {
                    console.debug('Opening ' + url + ' in a new tab.');
                    window.open(
                        url,
                        '_blank'
                    );

                } else {
                    window.location.href = url;
                }
            }
        })
    }
}