import { SET_WALLET_ADDRESS, SET_LOGIN_STATE, SET_POPUP_STATE, SET_NAME, SET_PROFILE } from '../actions/actions'

const initialState = {
  walletAddress: '',
  isLoggedIn: false,
  isPopup: false,
  name: '',  
  profile: '',  
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WALLET_ADDRESS:
      return {
        ...state,
        walletAddress: action.payload,
      }
    case SET_LOGIN_STATE:
      return {
        ...state,
        isLoggedIn: action.payload,
      }
    case SET_POPUP_STATE:
      return {
        ...state,
        isPopup: action.payload,
      }
    case SET_NAME:  // New case for name
      return {
        ...state,
        name: action.payload,
      }
    case SET_PROFILE:  // New case for profile
      return {
        ...state,
        profile: action.payload,
      }
    default:
      return state
  }
}


export default userReducer
