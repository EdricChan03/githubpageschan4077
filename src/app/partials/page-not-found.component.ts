import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'page-not-found',
  templateUrl: './page-not-found.component.html'
})

export class PageNotFoundComponent {
  constructor(private router: Router) {}
  /**
   * Refreshes
   * @return {void}
   * @version 1.0.2
   */
  refresh(): void {
    window.location.reload(true);
  }
  /**
   * Goes back to the previous {@link window.history}
   * @return {void}
   * @version 1.0.2
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