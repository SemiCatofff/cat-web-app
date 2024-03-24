import { setLoginState } from '../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { loginAPI } from '../../utils/OktoApiCalls'
import axios from 'axios'

import { useGoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogin = async () => {
    navigate('/signup')

    //const output = await loginAPI();
  }

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse)
      const userInfo = await axios
        .get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then((res) => res.data)

      console.log(userInfo)
    },
  })

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div
        className="w-32 h-10 bg-blue-500 flex justify-center items-center cursor-pointer rounded-lg"
        onClick={() => {
          handleLogin()
        }}
      >
        Login
      </div>
    </div>
  )
}

export default Login
