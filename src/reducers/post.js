import { POSTS_FETCHED, POST_CREATED } from '../constantes/types';

export default function post(state = { feed: [] }, action = {}) {
  switch (action.type) {
    case POST_CREATED:
      return { feed: [ ...state.feed, action.data ] };
    case POSTS_FETCHED:
      return { feed: action.data };
    default:
      return state;
  }
}
