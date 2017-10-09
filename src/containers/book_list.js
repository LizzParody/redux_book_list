//A container is a component that has access to the state produced by Redux
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => { //map over an array of books and for each book in the array, create an li that contains the book-title
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      )
    })
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()} { /* It calls the renderList helper function */}
      </ul>
    )
  }
}

function mapStateToProps(state) { //It takes the entire state and Whatever is returned will show up as props inside of BookList
  //when the state changes, this container will instantly render with the new list of books,
  //also, the object in the state function will be assigned as props to the component
  return {
    books: state.books //the books reducer is returning the books property (the array of books)
  };
}

export default connect(mapStateToProps)(BookList); //coonect takes a function and a component and produces a container
