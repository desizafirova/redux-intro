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
        loan: action.payload,
        balance: state.balance + action.payload,
      };
    case 'account/payLoan':
      if (state.balance < state.loan) return state;
      return {
        ...state,
        loan: state.loan - action.payload,
        loanPurpose: '',
        balance: state.balance - action.payload,
      };
    default:
      return state;
  }
}
