import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'page-not-found',
  templateUrl: './page-not-found.component.html'
})

export class PageNotFoundComponent {
  constructor(private router: Router) { }
  /**
   * Refreshes
   */
  refresh(): void {
    window.location.reload();
  }
  /**
   * Goes back to the previous item in the browser's history
   */
  goBack() {
    window.history.back();
  }
  /**
   * About
   * @todo Finish this
   * @version 1.0.2
   */
  aboutThis() {
    console.log('You clicked!');
  }
}
