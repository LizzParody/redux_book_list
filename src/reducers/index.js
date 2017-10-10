import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book'

const rootReducer = combineReducers({ //to create the application state
  books: BooksReducer, //this reducer is going to add a key to our global app state called books, where the key is books and the value is whatever gets returned from the books reducer which in this case is our array of books
  activeBook: ActiveBook //Every key passed on combineReducers end up as a key on our global state
});

export default rootReducer;
