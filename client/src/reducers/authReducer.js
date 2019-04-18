import { FETCH_USER, AUTH_ERROR } from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
  name: '',
  error: ''
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, authenticated: action.payload.token, name: action.payload.name, error: '' }

    case AUTH_ERROR:
      return { ...state, error: action.payload }

    default:
      return state;
  }
}