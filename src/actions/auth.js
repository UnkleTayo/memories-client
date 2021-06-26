import * as api from '../api/index';
import { AUTH, ERROR, LOADING } from '../constants/actionTypes';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    // if successful navigate to home page
    router.push('/');
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

export const signup = (formData, router) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    router.push('/');
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
