// import { SHOW_ERROR, RECEIVE_POSTS } from '../actions'

function message(state = "", action) {
  switch (action.type) {
    case "SHOW_MESSAGE":
      return action.message;
    // case RECEIVE_POSTS:
    //   return { errorMessage: null }

    default:
      return state;
  }
}

export default message;
