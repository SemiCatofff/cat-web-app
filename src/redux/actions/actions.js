// Action Types
export const SET_WALLET_ADDRESS = 'SET_WALLET_ADDRESS'
export const SET_LOGIN_STATE = 'SET_LOGIN_STATE'
export const SET_POPUP_STATE = 'SET_POPUP_STATE'


// Action Creators
export const setWalletAddress = (address) => ({
  type: SET_WALLET_ADDRESS,
  payload: address,
})

export const setLoginState = (isLoggedIn) => ({
  type: SET_LOGIN_STATE,
  payload: isLoggedIn,
})

export const setPopupState = (isPopup) => ({
  type: SET_POPUP_STATE,
  payload: isPopup
})
