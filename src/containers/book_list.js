//A container is a component that has access to the state produced by Redux
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'//import the action creator
import { bindActionCreators } from 'redux' //a function that makes sure the actions flows through all the reducers

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => { //map over an array of books and for each book in the array, create an li that contains the book-title
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)} //when the user clicks, it re-render itself -> actions selectBook(book) -> reducer return the payload (book)
          className="list-group-item">
          {book.title}
        </li>
      )
    })
  }
  render() {
    return (
      <ul className="list-group col-sm-4" style={{'padding-top': '50px', 'cursor': 'pointer'}}>
        {this.renderList()} { /* It calls the renderList helper function */}
      </ul>
    )
  }
}

//It takes the entire state and Whatever is returned will show up as props inside of BookList container
function mapStateToProps(state) {
  //when the state changes, this container will instantly render with the new list of books,
  //also, the object in the state function will be assigned as props to the component
  return {
    books: state.books //the books reducer is returning the books property (the array of books)
  };
}

//Everything returned from this function will end up as Props on the BookList container
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result should be passed to all the reducers as props: this.props.selectBook
  return bindActionCreators({ selectBook: selectBook}, dispatch); //created the selectBook key that the value is the selectBook (action creator) we imported from actions. The result will flow to dispatch, and dispatch its what takes all the actions and put them back to the reducers
}

//Promote BookList from a component to a container, it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList); //connect takes a function and a component and produces a container
