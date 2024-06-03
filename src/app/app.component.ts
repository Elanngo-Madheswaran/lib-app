import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-app';
  book_list: string[] = [
    "Harry Potter",
    "Ponniyin Selvan"
  ];
  book_name: string = "";

  addBook() {
    this.book_list.unshift(this.book_name);
    localStorage.setItem("my_books", JSON.stringify(this.book_list));
    this.book_name = ""; // Clear the input field
  }

  ngOnInit(): void {
    const storedBooks = localStorage.getItem("my_books");
    if (storedBooks) {
      this.book_list = JSON.parse(storedBooks);
    }
  }
}
