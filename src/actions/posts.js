import * as api from '../api/index';
import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  LIKE,
  DELETE,
  LOADING,
  ERROR,
  START_LOADING,
  FETCH_POST,
  FETCH_BY_CREATOR,
  END_LOADING,
  FETCH_BY_SEARCH,
  COMMENT,
} from '../constants/actionTypes';


export const getPost = (id) => async(dispatch) =>{
  try {
    dispatch({
      type: START_LOADING
    })
    const { data } = await api.fetchPost(id);
    dispatch({
      type: FETCH_POST, payload: {post: data}
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

// Action creators returns an object
export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({
      type: START_LOADING,
    });

    const { data:{data, currentPage, numberOfPages} } = await api.fetchPosts(page);

    dispatch({ type: FETCH_ALL, payload: {data, currentPage, numberOfPages} });
    dispatch({ type: END_LOADING });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getPostByCreator = (name) => async(dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {data: {data}} = await api.fetchPostsByCreator(name)
    dispatch({ type: FETCH_BY_CREATOR, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}


export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchPostsBySearch(searchQuery);

    dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export const createPost = (post, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });

    history.push(`/posts/${data._id}`);
  } catch (error) {
    dispatch({
      type: ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const likePost = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('profile'));

  try {
    dispatch({
      type: START_LOADING,
    });
    const { data } = await api.likePost(id, user?.token);
    dispatch({ type: LIKE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const commentPost = (value, id) => async (dispatch) => {
  try {
    dispatch({
      type: START_LOADING,
    });
    const { data } = await api.comment(value, id);

    dispatch({ type: COMMENT, payload: data });
    dispatch({ type: END_LOADING });
    return data.comments;
  } catch (error) {
    dispatch({
      type: ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    dispatch({
      type: START_LOADING,
    });
    await await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
    dispatch({ type: END_LOADING });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
