import { Component } from '@angular/core';

@Component({
  selector: 'main-navbar',
  standalone: true,
  imports: [],
  templateUrl: './main-navbar.component.html',
})
export class MainNavbarComponent {
  public theme: string = 'dark';
  public changeTheme() {
    if (this.theme == 'dark') {
      this.theme = 'light';
      document.documentElement.setAttribute('data-bs-theme', this.theme);
    } else {
      this.theme = 'dark';
      document.documentElement.setAttribute('data-bs-theme', this.theme);
    }
  }
}
