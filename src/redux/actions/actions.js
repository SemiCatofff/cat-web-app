// Action Types
export const SET_WALLET_ADDRESS = 'SET_WALLET_ADDRESS'
export const SET_LOGIN_STATE = 'SET_LOGIN_STATE'

// Action Creators
export const setWalletAddress = (address) => ({
  type: SET_WALLET_ADDRESS,
  payload: address,
})

export const setLoginState = (isLoggedIn) => ({
  type: SET_LOGIN_STATE,
  payload: isLoggedIn,
})
