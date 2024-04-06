import axios from 'axios'
const BackendURL = 'https://stagingapi.catoff.xyz'

//API CALLS FLOW
//GOOGLE AUTH FLOW ON THE LOGIN PAGE
const redirectGoogleAuth = async () => {
  try {
    window.location.href = `${BackendURL}/googleAuth`
  } catch (error) {}
}

// ACCOUNT FETCHING SCREEN

const authenticateAPI = async () => {
  let headers = {
    Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
  }
  try {
    const response = await axios.post(
      `${BackendURL}/oktoProxy/authPinCreate`,
      {},
      { headers }
    )
    return response.data
  } catch (error) {
    return error.message
  }
}

//first time user flow

const setPinAPI = async () => {
  let headers = {
    Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
  }
  try {
    const response = await axios.post(
      `${BackendURL}/oktoProxy/set_pin`,
      {},
      { headers }
    )
    return response.data
  } catch (error) {
    return error.message
  }
}

const createWallet = async () => {
  let headers = {
    Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
  }
  try {
    const response = await axios.post(
      `${BackendURL}/oktoProxy/create_wallet`,
      {},
      { headers }
    )
    return response.data
  } catch (error) {
    return error.message
  }
}

//logging in flow

const getRefreshTokenAPI = async () => {
  let headers = {
    Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
  }
  try {
    const response = await axios.post(
      `${BackendURL}/oktoProxy/refresh_token`,
      {},
      { headers }
    )
    return response.data
  } catch (error) {
    return error.message
  }
}

const getUserWalletAPI = async () => {
  let headers = {
    Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
  }

  try {
    const response = await axios.get(`${BackendURL}/oktoProxy/wallets`, {
      headers,
    })
    return response.data
  } catch (error) {
    return error.message
  }
}

//EXPLORE PAGE

const getChallenges = async (challengeID) => {
  let headers = {
    Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
  }
  try {
    const response = await axios.get(
      `${BackendURL}/challenge/challenges/${challengeID}`,
      { headers }
    )
    return response.data
  } catch (error) {
    return error.message
  }
}

const getOngoingChallenges = async (type, page, limit) => {
  let headers = {
    Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
  }

  try {
    const response = await axios.get(
      `${BackendURL}/challenge/challenges/onGoing/category/${type}?page=${page}&limit=${limit}`,
      { headers }
    )
    return response.data
  } catch (error) {
    return error.message
  }
}

const searchChallengeAPI = async (search, page, limit) => {
  let headers = {
    Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
  }

  try {
    const response = await axios.get(
      `${BackendURL}/challenge/challenges/search/${search}?page=${page}&limit=${limit}`,
      { headers }
    )
    return response.data
  } catch (error) {
    return error.message
  }
}

//CREATE CHALLENGE PAGE

const createChallengeAPI = async (challengeDetails) => {
  let headers = {
    Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
  }

  try {
    const response = await axios.post(
      `${BackendURL}/player`,
      challengeDetails,
      { headers }
    )
    return response.data
  } catch (error) {
    return error.message
  }
}

//CHALLENGE DETAILS PAGE

//CHALLENGE JOIN FLOW4

const joinChallengeAPI = async (challengeName) => {
  let headers = {
    Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
  }

  let body = {
    ChallengeID: challengeName,
  }

  try {
    const response = await axios.post(`${BackendURL}/player`, body, { headers })
    return response.data
  } catch (error) {
    return error.message
  }
}

//user dashboard page

const getUserChallenges = async () => {
  let headers = {
    Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
  }
  try {
    const response = await axios.get(
      `${BackendURL}/userBoard/dashboard/userCurrentTable`,
      { headers }
    )
    return response.data
  } catch (error) {
    return error.message
  }
}

const getUserDetails = async () => {
  let headers = {
    Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
  }
  try {
    const response = await axios.get(
      `${BackendURL}/userBoard/dashboard/userDetails`,
      { headers }
    )
    return response.data
  } catch (error) {
    return error.message
  }
}

//CHALLENGE PROGRESS PAGE

const getChallengeDashboard = async (challengeID) => {
  let headers = {
    Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
  }
  try {
    const response = await axios.get(
      `${BackendURL}/challenge/challenges/dashboard/${challengeID}`,
      { headers }
    )
    return response.data
  } catch (error) {
    return error.message
  }
}

const getLeaderboard = async (challengeID) => {
  let headers = {
    Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
  }
  try {
    const response = await axios.get(
      `${BackendURL}/challenge/challenges/${challengeID}/leaderboard`,
      { headers }
    )
    return response.data
  } catch (error) {
    return error.message
  }
}

const withDrawApi = async () => {
  let headers = {
    Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
  }
  try {
    const response = await axios.get(`${BackendURL}/challenge/challenges`, {
      headers,
    })
    return response.data
  } catch (error) {
    return error.message
  }
}

const getShareableChallengeLink = async (challengeID) => {
  // let headers = {
  //   Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
  // }
  try {
    const response = await axios.get(
      `${BackendURL}/challenge/challenges/${challengeID}/share`
      // { headers }
    )
    return response.data
  } catch (error) {
    return error.message
  }
}

const logout = async () => {}
export {
  redirectGoogleAuth,
  authenticateAPI,
  setPinAPI,
  getRefreshTokenAPI,
  createWallet,
  getUserWalletAPI,
  getChallenges,
  getOngoingChallenges,
  getChallengeDashboard,
  getLeaderboard,
  searchChallengeAPI,
  joinChallengeAPI,
  getUserChallenges,
  getUserDetails,
  logout,
  withDrawApi,
  getShareableChallengeLink,
}
