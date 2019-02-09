import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatSnackBar, MatDialog } from '@angular/material';

// UrlDialog
import { UrlDialog } from '../dialogs/urldialog.component';
@Injectable()
export class UrlDialogService {
  settings: any = JSON.parse(localStorage.getItem('settings')) || {};
  constructor(private snackbar: MatSnackBar, private dialog: MatDialog) { }
  /**
   * Goes to a url
   * @param url The URL to go to
   */
  public goToUrl(url: string) {
    const dialogRef = this.dialog.open(UrlDialog);
    dialogRef.componentInstance.url = url;
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'cancel') {
        // Do nothing
        this.snackbar.open('You cancelled the redirect', null, { duration: 5000 });
      } else if (result === 'redirect') {
          window.open(
            url,
            '_blank'
          );
      } else {
        window.location.href = url;
      }
    });
  }
}
