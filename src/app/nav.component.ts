import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  template: `<nav>
    <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/dashboard">Dashboard</a></li>
    </ul>
  </nav>`,
  standalone: true,
  imports: [RouterModule],
})
export class NavComponent {}
