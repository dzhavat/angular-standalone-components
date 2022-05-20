import { Component } from '@angular/core';

import { BooksModule } from './books/books.module';

@Component({
  selector: 'app-home',
  template: '<app-books></app-books>',
  standalone: true,
  imports: [BooksModule],
})
export class HomeComponent {}
