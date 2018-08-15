import defaultState from './defaultState.js';

let initialState = defaultState;

export default (state = initialState, action) => {
  let expenses;
  let { type, payload } = action;

  switch (type) {

    case 'EXPENSE_CREATE': return { ...state, expenses: [...state.expenses, payload] };

    case 'EXPENSE_UPDATE':
      expenses = state.expenses.map(expense => expense.id === payload.id ? { ...payload, editing: false } : expense);
      return {...state, expenses};

    case 'EXPENSE_DESTROY':
      expenses = state.expenses.filter(expense => expense.id !== payload.id);
      return { ...state, expenses };

    case 'EXPENSE_EDIT':
      expenses = state.expenses.map(expense => expense.id === payload.id ? { ...payload, editing: true } : { ...expense, editing: false });
      return { ...state, expenses };
    case 'CANCEL_BUTTON':
      expenses = state.expenses.map(expense => expense.id === payload.id ? { ...payload, editing: false } : { ...expense, editing: false });
      return { ...state, expenses };

    default: return state;
  }
};  