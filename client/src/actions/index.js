import axios from 'axios';

import { FETCH_USER, AUTH_ERROR, CREATE_ORDER } from './types';

export const signup = ({ name, email, password }, callback) => async dispatch => {
  try {
    const response = await axios.post('/api/signup', { name, email, password });

    dispatch({ type: FETCH_USER, payload: response.data });

    localStorage.setItem('token', response.data.token);
    
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email is in use!' });
  }
}

export const signin = ({ email, password }, callback) => async dispatch => {
  const response = await axios.post('/api/signin', { email, password });

  dispatch({ type: FETCH_USER, payload: response.data });

  localStorage.setItem('token', response.data.token);

  callback();
}

export const signout = (callback) => async dispatch => {
  localStorage.removeItem('token');

  dispatch({ type: FETCH_USER, payload: { token: '', name: '' } });

  callback();
}

export const fetchUser = () => async (dispatch, getState) => {
  const { authenticated } = getState().auth;

  const response = await axios.get(
    '/api/current_user', 
    { 
      headers: { authorization: authenticated } 
    }
  );

  response.data.token = authenticated;

  dispatch({ type: FETCH_USER, payload: response.data })
}

export const createOrder = (title, quantity, cost, callback) => async dispatch => {
  const data = {
    title: title,
    quantity: quantity,
    cost: cost
  }

  dispatch({ type: CREATE_ORDER, payload: data });
  callback();
}