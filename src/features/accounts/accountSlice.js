const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};

export default function accountReducer(state = initialStateAccount, action) {
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
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: '',
      };
    default:
      return state;
  }
}

export function deposit(amount) {
  return { type: 'account/deposit', payload: amount };
}

export function withdraw(amount) {
  return { type: 'account/withdraw', payload: amount };
}

export function requestLoan(amount, purpose) {
  return {
    type: 'account/requestLoan',
    payload: { amount: amount, purpose: purpose },
  };
}
export function payLoan() {
  return { type: 'account/payLoan' };
}

// store.dispatch(requestLoan(1000, 'to buy a car'));
// store.dispatch(payLoan());
