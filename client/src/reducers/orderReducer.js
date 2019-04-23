import { CREATE_ORDER } from '../actions/types';

const INITIAL_STATE = {
  title: '',
  quantity: 0,
  cost: 0
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state, 
        title   : action.payload.title, 
        quantity: action.payload.quantity,
        cost    : action.payload.cost
      }

    default:
      return state;
  }
}