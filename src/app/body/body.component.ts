import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  books: any[] = [
    { title: 'Book 1', author: 'Author A', genre: 'Fiction', copiesLeft: 5 },
    { title: 'Book 2', author: 'Author B', genre: 'Mystery', copiesLeft: 3 },
    { title: 'Book 3', author: 'Author C', genre: 'Science Fiction', copiesLeft: 8 },
    { title: 'Book 4', author: 'Author D', genre: 'Fantasy', copiesLeft: 2 }
  ];
}
