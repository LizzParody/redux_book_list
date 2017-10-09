import React, { Component } from 'react';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => { //map over an array of books and for each book in the array, create an li that contains the book-title
      return (
        <li key={book.title}className="list-group-item">{book.title}</li>
      )
    })
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList} { /* It calls the renderList helper function */}
      </ul>
    )
  }
}

export default BookList;
