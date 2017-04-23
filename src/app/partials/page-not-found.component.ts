import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'page-not-found',
  templateUrl: './page-not-found.component.html'
})

export class PageNotFoundComponent {
  constructor(private router: Router) {}
  refresh(): void {
    window.location.reload(true);
  }
  goBack() {
    window.history.back();
  }
  aboutThis() {
    console.log('You clicked!');
  }
}