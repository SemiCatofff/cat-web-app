import { SET_WALLET_ADDRESS, SET_LOGIN_STATE } from '../actions/actions';

const initialState = {
  walletAddress: '',
  isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WALLET_ADDRESS:
      return {
        ...state,
        walletAddress: action.payload,
      };
    case SET_LOGIN_STATE:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;