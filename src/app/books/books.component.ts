import { Component } from '@angular/core';

interface Book {
  title: string;
  desciption: string;
  author: string[];
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent {
  books: Book[] = [
    {
      title: 'Accelerating Angular Development with Ivy',
      desciption:
        'A practical guide to building faster and more testable Angular apps with the new Ivy engine',
      author: ['Lars Gyrup Brink Nielsen', 'Jacob Andresen'],
    },
    {
      title: 'Angular Projects',
      desciption:
        'Build modern web apps by exploring Angular 12 with 10 different projects and cutting-edge technologies',
      author: ['Aristeidis Bampakos'],
    },
    {
      title: 'Reactive Patterns with RxJS for Angular',
      desciption:
        "A practical guide to managing your Angular application's data reactively and efficiently using RxJS 7",
      author: ['Lamis Chebbi'],
    },
  ];
}
