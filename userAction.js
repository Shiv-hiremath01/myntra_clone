// frontend/src/actions/userAction.js
import axios from '../api/axiosInstances';

// Action to handle user login
export const loginUser = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: 'LOGIN_REQUEST' });

    const response = await axios.post('/auth/login', credentials);

    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: response.data,
    });

    localStorage.setItem('user', JSON.stringify(response.data));
  } catch (error) {
    dispatch({
      type: 'LOGIN_FAILURE',
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Action to handle user registration
export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: 'USER_REGISTER_REQUEST' });

    const { data } = await axios.post('/auth/register', userData);

    dispatch({
      type: 'USER_REGISTER_SUCCESS',
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: 'USER_REGISTER_FAIL',
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Action to log out the user
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('user');
  dispatch({ type: 'LOGOUT' });
};
