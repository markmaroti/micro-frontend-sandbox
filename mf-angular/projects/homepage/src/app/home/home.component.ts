import { Component, inject } from '@angular/core';
import { AuthService } from '@lib/auth';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public auth = inject(AuthService);

  constructor() {
    this.auth.userName = 'User Name';
  }
}
