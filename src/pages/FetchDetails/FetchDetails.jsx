import { setLoginState } from '../../redux/actions/actions'
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  authenticateAPI,
  createWallet,
  getRefreshTokenAPI,
  setPinAPI,
} from '../../utils/ApiCalls'
import { useDispatch } from 'react-redux'

function Fetchdetails() {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  
  const checkLoginStatus = async () => {
    const queryParams = new URLSearchParams(location.search)
    const jwt = queryParams.get('jwt')
    sessionStorage.setItem('authToken', jwt)
    
  
       const output = await authenticateAPI()
    
      const output2 = await setPinAPI()

      const output3 = await createWallet()
    
    const refreshToken = await getRefreshTokenAPI()

    
    sessionStorage.setItem("set",1)

    dispatch(setLoginState(true))
    navigate('/')
  }

  useEffect(() => {
    checkLoginStatus()
  }, [dispatch])

  return (
    <div className="absolute z-10 inset-0 bg-signup bg-cover bg-center"></div>
  )
}

export default Fetchdetails
