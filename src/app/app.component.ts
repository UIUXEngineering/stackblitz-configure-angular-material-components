import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // @HostBinding('class.unicorn-dark-theme') darkTheme: boolean = false;
  darkTheme: boolean = false;
  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
  }

  goHome() {
    this.router.navigate(['home']);
  }

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    if (this.darkTheme) {
      this.document.body.classList.add('unicorn-dark-theme');
    } else {
      this.document.body.classList.remove('unicorn-dark-theme');
    }
  }
}
