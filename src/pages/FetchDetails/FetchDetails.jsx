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
import styles from '../../styles/style'

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
    <div className="w-full h-full flex justify-center">
    <div className="absolute top-[50%] flex flex-col justify-center items-center">
    <div className="loader animate-spin rounded-full border-t-4 border-b-4 border-yellow h-12 w-12"></div>

      <div className="flex flex-col items-center mt-[30px] gap-[10px]">
        <div className={`${styles.subheading} !text-[#FFFFFF] !font-regular`}>
          Creating your account
        </div>
       
      </div>
    </div>
  </div>
  )
}

export default Fetchdetails


   {/* */}