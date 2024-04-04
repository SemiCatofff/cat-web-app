import { setLoginState } from '../../redux/actions/actions'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  authenticateAPI,
  createWallet,
  getRefreshTokenAPI,
  setPinAPI,
  redirectGoogleAuth
} from '../../utils/ApiCalls'
import { useDispatch } from 'react-redux'
import styles from '../../styles/style'

import React, { useEffect } from 'react';
import { Popup } from '../../components'
import { useState } from 'react'
import main from "../../assets/images/main.png"

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleClosePopup = () => {
    setIsPopupOpen(false)
    }



    const popupContent = 
      <div className={`!z-40`}>
        <div className={`${styles.paddingX} ${styles.paddingY}  text-center`}>
          <h2 className={`${styles.heading1} !text-black `}>Please wait!</h2>
          <p className={`${styles.subheading2} !text-black mt-6`}>
            🎉 Processing Your Request! 🎉
          </p>
         
          <div className="loader animate-spin rounded-full border-t-4 border-b-4 border-yellow h-12 w-12 mx-auto mt-8"></div>
        </div>
      </div>
    

    const handleAuthenticationProcess = async () => {
      const output = await authenticateAPI();

      if(output.success){
        const output2 = await setPinAPI();
        const output3 = await createWallet();
        const refreshToken = await getRefreshTokenAPI();
        if(refreshToken.status === 'success'){
          dispatch(setLoginState(true));
        }

      }
    
    };
  
    const handleLogin = async () => {
      const output = await redirectGoogleAuth()
    }
  
    useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
      const jwt = queryParams.get('jwt');
      if (jwt) {
        setIsPopupOpen(true)
        sessionStorage.setItem('authToken', jwt);
        handleAuthenticationProcess();
      }
    }, [location, dispatch]);
  
  return (
    <div className="w-full h-full flex flex-col justify-start items-center relative">
    <div className="flex flex-col justify-center px-6 pt-[40px]">
      <img src ={main}></img>
    
    </div>
    <div
        className="w-full h-[68px] rounded-[100px] cursor-pointer flex items-center justify-center m-4"
        onClick={handleLogin}
      >
        <div className='rounded-[100px] cursor-pointer h-full w-[298px] bg-[#202117] flex items-center justify-center'>
        <span className={`${styles.heading1} !text-yellow`}>SIGNUP</span>

        </div>
       
      </div>

    <Popup
        isOpen={isPopupOpen}
        content={popupContent}
        onClose={handleClosePopup}
      />
  </div>
  );
}
export default Login;
