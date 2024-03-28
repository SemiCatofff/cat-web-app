import axios from 'axios'
const BackendURL = 'https://stagingapi.catoff.xyz'

const authToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcxMTUyNTA5NiwiZXhwIjoxNzExNjExNDk2fQ.OucF7IlG5AAceAoPrM0ufRz8gcy8HA7EQaBONKkTwR4'

//API CALLS FLOW
//GOOGLE AUTH FLOW ON THE LOGIN PAGE
const redirectGoogleAuth = async () => {
  try {
    const response = await axios.get(`${BackendURL}/googleAuth`)
    return response.data
  } catch (error) {
    return error.message
  }
}

// ACCOUNT FETCHING SCREEN

const authenticateAPI = async () => {
  let headers = {
    Authorization: `Bearer ${authToken}`,
  }
  try {
    const response = await axios.post(
      `${BackendURL}/oktoProxy/authenticate`,
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
    Authorization: `Bearer ${authToken}`,
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
    Authorization: `Bearer ${authToken}`,
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
    Authorization: `Bearer ${authToken}`,
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
    Authorization: `Bearer ${authToken}`,
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
    Authorization: `Bearer ${authToken}`,
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
    Authorization: `Bearer ${authToken}`,
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


const searchChallengeAPI = async (search, page, limit) =>{

  let headers = {
    Authorization: `Bearer ${authToken}`,
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
    Authorization: `Bearer ${authToken}`,
  }

  try {
    const response = await axios.post(
      `${BackendURL}/oktoProxy/re`,
      challengeDetails,
      { headers }
    )
    return response.data
  } catch (error) {
    return error.message
  }
}

//CHALLENGE DETAILS PAGE

//CHALLENGE JOIN FLOW

//CHALLENGE PROGRESS PAGE

//TAB===0

//TAB ===1

//TAB === 2

export {
  redirectGoogleAuth,
  authenticateAPI,
  setPinAPI,
  getRefreshTokenAPI,
  createWallet,
  getUserWalletAPI,
}
