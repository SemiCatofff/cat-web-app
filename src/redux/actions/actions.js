// Action Types
export const SET_WALLET_ADDRESS = 'SET_WALLET_ADDRESS'
export const SET_LOGIN_STATE = 'SET_LOGIN_STATE'
export const SET_POPUP_STATE = 'SET_POPUP_STATE'
export const SET_NAME = 'SET_NAME' // New action type for name
export const SET_PROFILE = 'SET_PROFILE' // New action type for profile

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

export const setName = (name) => ({  // New action creator for name
  type: SET_NAME,
  payload: name,
})

export const setProfile = (profile) => ({  // New action creator for profile
  type: SET_PROFILE,
  payload: profile,
})