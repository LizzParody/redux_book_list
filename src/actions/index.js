//Action creator called selectBook, it needs to return an action, an object with
//a type property
export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED', //The action described is the user selecting a book
    payload: book //piece of data that described the action being undertaken
  }
}
