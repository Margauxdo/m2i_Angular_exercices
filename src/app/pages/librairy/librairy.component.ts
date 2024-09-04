import { Component } from '@angular/core';
import {Book} from "../../models/Books";
import {ThumbsPipe} from "../../utils/pipes/thumbs.pipe";

@Component({
  selector: 'app-librairy',
  standalone: true,
  imports: [
    ThumbsPipe
  ],
  templateUrl: './librairy.component.html',
  styleUrl: './librairy.component.css'
})
export class LibrairyComponent {

  library: Book[] = [
    {title: "title1", author: "author1", isRead:true},
    {title: "title2", author: "author2", isRead:true},
    {title: "title3", author: "author3", isRead:false},
    {title: "title4", author: "author4", isRead:false},
    {title: "title5", author: "author5", isRead:true},
    ];
  toggleRead(book: Book):void {
    book.isRead = !book.isRead;


  }

}
