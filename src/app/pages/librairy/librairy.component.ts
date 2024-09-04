import {Component} from '@angular/core';
import {Book} from "../../models/books";
import {ThumbsPipe} from "../../utils/pipes/thumbs.pipe";
import {FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'app-librairy',
  standalone: true,
  imports: [
    ThumbsPipe,
    FormsModule
  ],
  templateUrl: './librairy.component.html',
  styleUrl: './librairy.component.css'
})
export class LibrairyComponent {

  library: Book[] = [
    {title: "title1", author: "author1", isRead: true},
    {title: "title2", author: "author2", isRead: true},
    {title: "title3", author: "author3", isRead: false},
    {title: "title4", author: "author4", isRead: false},
    {title: "title5", author: "author5", isRead: true},
  ];
  book: Book = {
    title: "",
    author: "",
    isRead: false
  };


  toggleRead(book: Book): void {
    book.isRead = !book.isRead;
  }

  get titleError(): boolean {
    return this.book.title.length === 0;

  }

  get authorError(): boolean {
    return this.book.author.length === 0;
  }

  submitForm() {
    if (!this.titleError && !this.authorError) {
      this.library.push({...this.book});
      console.log(this.book);
      this.resetForm();
    }


  }
  resetForm() {
    this.book.title = "";
    this.book.author = "";
    this.book.isRead = false;


  }

}
