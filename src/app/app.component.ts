import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @HostBinding('class.unicorn-dark-theme') darkTheme: boolean = false;
  constructor(private router: Router) {
  }

  goHome() {
    this.router.navigate(['home']);
  }

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
  }
}
