import { Response } from '@angular/http';
import { BookService } from '../services/book.services';
import Book from '../models/book.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor(
    //Private bookservice will be injected into the component by Angular Dependency Injector
    private bookService: BookService
  ) { }

  //Declaring the new book Object and initilizing it
  public newBook: Book = new Book()

  //An Empty list for the visible book list
  booksList: Book[] = [];
  editBooks: Book[] = [];


  ngOnInit(): void {

    //At component initialization the 
    this.bookService.getBooks()
      .subscribe(books => {
        //assign the booklist property to the proper http response
        this.booksList = books
      
      })
  }
  //This method will get called on Create button event
  
  create() {
    console.log(this.newBook);
    this.bookService.createBook(this.newBook)
      .subscribe((res) => {
        this.booksList.push(res.data)
        this.newBook = new Book()
      })
  }

  editBook(book: Book) {
    console.log(book)
     if(this.booksList.includes(book)){
      if(!this.editBooks.includes(book)){
        this.editBooks.push(book)
      }else{
        this.editBooks.splice(this.editBooks.indexOf(book), 1)
        this.bookService.editBook(book).subscribe(res => {
          console.log('Update Succesful')
         }, err => {
           // this.editBook(book)
            console.error('Update Unsuccesful')
          })
        }
      }
    }

    doneBook(book:Book){
      book.status = 'Done'
      this.bookService.editBook(book).subscribe(res => {
        console.log('Update Succesful')
      }, err => {
        //this.editBook(book)
        console.error('Update Unsuccesful')
      })
    }
//listening to the enter key,when the user clicks the enter key only
    submitBook(event, book:Book){
      if(event.keyCode ==13){
        this.editBook(book)
      }
    }

    deleteBook(book: Book) {
      this.bookService.deleteBook(book._id).subscribe(res => {
        this.booksList.splice(this.booksList.indexOf(book), 1);
      })
    }
}
