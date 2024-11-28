import { createStore } from 'redux';

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'account/deposit':
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case 'account/withdraw':
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case 'account/requestLoan':
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        balance: state.balance + action.payload.amount,
        loanPurpose: action.payload.purpose,
      };
    case 'account/payLoan':
      if (state.balance < state.loan) return state;
      return {
        ...state,
        balance: state.balance - store.loan,
        loan: 0,
        loanPurpose: '',
      };
    default:
      return state;
  }
}

// const store = createStore(reducer);
// store.dispatch({ type: 'account/deposit', payload: 500 });
// store.dispatch({ type: 'account/withdraw', payload: 200 });
// store.dispatch({
//   type: 'account/requestLoan',
//   payload: { amount: 1000, purpose: 'to buy a car' },
// });

// console.log(store.getState());

function deposit(amount) {
  return { type: 'account/deposit', payload: amount };
}
store.dispatch(deposit(500));
console.log(store.getState());
function withdraw(amount) {
  return { type: 'account/withdraw', payload: amount };
}
store.dispatch(withdraw(100));
function requestLoan(amount, purpose) {
  return {
    type: 'account/requestLoan',
    payload: { amount: amount, purpose: purpose },
  };
}
function payLoan() {
  return { type: 'account/payLoan' };
}

store.dispatch(requestLoan(1000, 'to buy a car'));
store.dispatch(payLoan());
