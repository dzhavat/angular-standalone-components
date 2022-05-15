import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, NavComponent],
})
export class AppComponent {
  title = 'Angular Standalone Components';
}
