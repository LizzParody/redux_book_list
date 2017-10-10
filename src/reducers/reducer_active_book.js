//There is two cases, when we care about the action and when we don't.
//If we don't we return the current state. If we do we return the action.payload
//which is the selected book

export default function (state = null, action) { //The state argument is not application state, only the state this reducer is responsible for. Is set to null because it can't be undefined when we don't click.
  switch (action.type) {
    case 'BOOK_SELECTED'
      return action.payload //return the selected book
  }
  return state
}
