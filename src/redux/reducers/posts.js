// eslint-disable-next-line
import { END_LOADING, FETCH_ALL, FETCH_BY_ID, FETCH_BY_SEARCH, START_LOADING } from "../actions/actionType";
// eslint-disable-next-line
export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING: {
      return {
        ...state,
        isLoading: true
      }
    }
    case END_LOADING: {
      return {
        ...state,
        isLoading: false
      }
    }
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload,
      };
    case FETCH_BY_ID:
      return {
        ...state,
        posts: action.payload,
      };

    case FETCH_BY_SEARCH:
      return {
        ...state,
        posts: action.payload,
      }

    default:
      return state;
  }
};
