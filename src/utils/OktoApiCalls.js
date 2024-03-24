import axios from 'axios'
const BackendURL = 'https://sandbox-api.okto.tech'

const tok =
  'eyJhbGciOiJSUzI1NiIsImtpZCI6IjA4YmY1YzM3NzJkZDRlN2E3MjdhMTAxYmY1MjBmNjU3NWNhYzMyNmYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI0MDc0MDg3MTgxOTIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0MDc0MDg3MTgxOTIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTAxOTk5MDk4MTYzNzcwODIyMzkiLCJlbWFpbCI6InJhai5hcnlhbWFuMDgxNkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IkNTNWxudVFYUUtqeXpKUVEtWjRMVnciLCJpYXQiOjE3MTAzMjgwNDQsImV4cCI6MTcxMDMzMTY0NH0.WikAkX3mKNj-rlcm6MrSRL2dvCEmW9N7mTixVbxI6UvDRrM1OK5jLGcCXp1JVwgE2GuKeoUdfbnBwA9AEdtgmUeyXLHjod40s9odDNLhFyC7jgsw3ORg3coXW-enTB4JyNFz6EfQLR0GFpxoV9ZlV190YaRlJJr5o9r2iE88LWmT9zVfLwmYC7ljcZPOu2E8GWFTz--4EmUPVC_b4DgBsM4mErv2RkmoaybzPWGBk7mGZmiuuD-NfpGSf__EAEGnGSo44VXWTZ2zOdXKFpGw8r7tx8W4cXiU7coTuCTelPbjSjG32GCJcTGYODOzEtDoDAZDY_kva3WyggFUV1K4PA'

const loginAPI = async () => {
  let body = {
    id_token: tok,
  }
  let headers = {
    'x-api-key': 'ed73c079-f78b-42ff-ad2d-d3e748c48238',
  }
  try {
    const response = await axios.post(
      `${BackendURL}/api/v1/authenticate`,
      body,
      { headers }
    )
    return response.data
  } catch (error) {
    return error.message
  }
}

const setPinAPI = async (pin, token) => {
  let body = {
    id_token: tok,
    token: token,
    relogin_pin: pin,
    purpose: 'set_pin',
  }

  let headers = {
    'x-api-key': 'ed73c079-f78b-42ff-ad2d-d3e748c48238',
  }
  try {
    const response = await axios.post(`${BackendURL}/api/v1/set_pin`, body, {
      headers,
    })
    return response.data
  } catch (error) {
    return error.message
  }
}

const createWallet = async () => {
  let body = {
    id_token: tok,
  }
  let headers = {
    Authorization: 'Bearer ' + localStorage.getItem('oktoAuthToken'),
    'x-api-key': 'ed73c079-f78b-42ff-ad2d-d3e748c48238',
  }

  try {
    const response = await axios.post(`${BackendURL}/api/v1/wallet`, body, {
      headers,
    })
    return response.data
  } catch (error) {
    return error.message
  }
}

// {
//     "code": "4/0AeaYSHBcoKduHNRRzDmxM7LCsP8PI2ctGr2ZWmFqU_QTVDvgs2Nn0OskGKOsOeyQadKYTg",
//     "scope": "email profile openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
//     "authuser": "0",
//     "prompt": "consent"
// }

export { loginAPI, setPinAPI, createWallet }
