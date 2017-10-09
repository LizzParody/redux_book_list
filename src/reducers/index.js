import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({ //to create the application state
  books: BooksReducer //this reducer is going to add a key to our global app state called books, where the key is books and the value is whatever gets returned from the books reducer which in this case is our array of books
});

export default rootReducer;
