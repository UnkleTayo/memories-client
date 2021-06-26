import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  LIKE,
  DELETE,
  LOADING,
  ERROR,
} from '../constants/actionTypes';
// create reducers
const reducers = (posts = [], action) => {
  switch (action.type) {
    case LOADING:
      return { loading: true };
    case ERROR:
      return { loading: false, error: action.payload };
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return posts?.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};

export default reducers;
