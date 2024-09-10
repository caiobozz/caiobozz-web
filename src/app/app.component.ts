import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MainNavbarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'caiobozz-web';
}
