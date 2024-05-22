import axios from 'axios'
const BackendURL = 'https://stagingapi2.catoff.xyz'

//API CALLS FLOW
//GOOGLE AUTH FLOW ON THE LOGIN PAGE
const redirectGoogleAuth = async () => {
  try {
    window.location.href = `${BackendURL}/auth/googleAuth`
  } catch (error) {}
}

const serverGoogleAuth = async (code) => {
  let body = JSON.stringify({
    code: code,
  })
  console.log(code)
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const response = await axios.post(
      `${BackendURL}/auth/googleAuth/login`,
      body,
      config
    )
    return response.data
  } catch (error) {
    return error.message
  }
}

const refreshServer = async (code) => {
  let headers = {
    Authorization: `Bearer ${localStorage.getItem('refreshToken')}`,
  }
  try {
    const response = await axios.post(
      `${BackendURL}/auth/refresh`,
      {},
      { headers }
    )
    return response.data
  } catch (error) {
    return error.message
  }
}

// ACCOUNT FETCHING SCREEN
const authenticateAPI = async () => {
  let headers = {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
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
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
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
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
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
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  }
  try {
    const response = await axios.post(
      `${BackendURL}/oktoProxy/refreshToken`,
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
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
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
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  }
  try {
    const response = await axios.get(
      `${BackendURL}/challenge/dashboard/${challengeID}`,
      { headers }
    )
    return response.data
  } catch (error) {
    return error.message
  }
}

const getOngoingChallenges = async (body) => {
  let headers = {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  }

  try {
    const response = await axios.post(`${BackendURL}/challenge/filter`, body, {
      headers,
    })
    return response.data
  } catch (error) {
    return error.message
  }
}

const searchChallengeAPI = async (search, page, limit) => {
  let headers = {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
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
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  }

  try {
    const response = await axios.post(
      `${BackendURL}/challenge`,
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
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  }

  let body = {
    ChallengeID: parseInt(challengeName),
  }

  try {
    const response = await axios.post(`${BackendURL}/player`, body, { headers })
    return response.data
  } catch (error) {
    return error.response.data
  }
}

//user dashboard page

const getUserChallenges = async () => {
  let headers = {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
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
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
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
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  }
  try {
    const response = await axios.get(
      `${BackendURL}/challenge/dashboard/${challengeID}`,
      { headers }
    )
    return response.data
  } catch (error) {
    return error.message
  }
}

const getLeaderboard = async (challengeID) => {
  let headers = {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  }
  try {
    const response = await axios.get(
      `${BackendURL}/challenge/leaderboard/${challengeID}`,
      { headers }
    )
    return response.data
  } catch (error) {
    return error.message
  }
}

const withDrawApi = async (amount) => {
  let headers = {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  }
  let body = {
    amount: parseInt(amount),
    currency: 'SOL',
  }

  try {
    const response = await axios.post(`${BackendURL}/user/withdraw`, body, {
      headers,
    })
    return response.data
  } catch (error) {
    return error.message
  }
}

const uploadFileApi = async (file) => {
  let headers = {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    'Content-Type': 'multipart/form-data',
  }
  const formData = new FormData()
  formData.append('file', file)

  try {
    const response = await axios.post(
      `https://ipfs.catoff.xyz/upload`,
      formData,
      { headers }
    )
    return response.data
  } catch (error) {
    return error.message
  }
}

const getShareableChallengeLink = async (challengeID) => {
  // let headers = {
  //   Authorization: `Bearer ${localStorage.getItem('authToken')}`,
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

const getReclaimProof = async (challengeID) => {
  let headers = {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  }

  let body = {
    AppName: 'TWITTER_ANALYTICS_VIEWS',
    ChallengeID: parseInt(challengeID),
  }

  try {
    const response = await axios.post(`${BackendURL}/reclaim/sign`, body, {
      headers,
    })
    return response.data
  } catch (error) {
    return error.message
  }
}

const getSubmissions = async (challengeID) => {
  let headers = {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  }
  try {
    const response = await axios.get(
      `${BackendURL}/player/submissions/${challengeID}`,
      { headers }
    )
    return response.data
  } catch (error) {
    return error.message
  }
}

const submitClaim = async (challengeID, value, Url) => {
  let headers = {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  }
  let body = {
    ChallengeID: parseInt(challengeID),
    Value: parseInt(value),
    Url: Url,
  }
  try {
    const response = await axios.post(`${BackendURL}/player/submission`, body, {
      headers,
    })
    return response.data
  } catch (error) {
    return error.message
  }
}

const validate = async (challengeID, invalid) => {
  let headers = {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  }
  let body = {
    InvalidSubmissions: invalid,
  }
  try {
    const response = await axios.post(
      `${BackendURL}/challenge/validate/${challengeID}`,
      body,
      { headers }
    )
    return response.data
  } catch (error) {
    return error.message
  }
}

const getMysubmit = async (challengeID) => {
  let headers = {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  }
  try {
    const response = await axios.get(
      `${BackendURL}/player/submission/${challengeID}`,
      { headers }
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
  createChallengeAPI,
  getReclaimProof,
  uploadFileApi,
  getSubmissions,
  validate,
  submitClaim,
  getMysubmit,
  serverGoogleAuth,
  refreshServer,
}
