import defaultState from './defaultState.js';

let initialState = defaultState;

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {

    case 'EXPENSE_CREATE': return {...state, expenses: [...state.expenses, payload]};
    case 'EXPENSE_UPDATE':return {};
    case 'EXPENSE_DESTROY': return {};
    case 'EXPENSE_EDIT': return {};
    // case 'CANCEL_BUTTON': return {};

    default: return state;
  }
};