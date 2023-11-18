import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'step-now-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'step-now';

  logo = {
    black: 'assets/img/Step Now Logo black.png',
    white: 'assets/img/Step Now Logo.png',
  };

  currentLogo = this.logo.white;
}
