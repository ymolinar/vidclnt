import {loanConstants} from "../constants/loan_constants";

const initialState = {
    loans: [],
    error: undefined,
    loading: false
};

export default function loansReducer(state = initialState, action) {
    switch (action.type) {
        case loanConstants.ALL:
            return {...state, loans: action.payload};
        case loanConstants.ADD:
            return {...state, loans: [...state.loans, action.payload]};
        case loanConstants.REQUEST:
            return {...state, loading: true};
        case loanConstants.SUCCESS:
            return {...state, loading: false, error: undefined};
        case loanConstants.ERROR:
            return {...state, loading: false, error: action.payload};
        case loanConstants.CLOSE:
            return {...state, loans: [...state.loans.filter(loan => loan.id !== action.payload.id), action.payload]};
        default:
            return state
    }
}