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


function FetchDetails() {
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
    const output2 = await setPinAPI();
    const output3 = await createWallet();
    const refreshToken = await getRefreshTokenAPI();
    dispatch(setLoginState(true));
    navigate('/');
  };

  const handleLogin = async () => {
    const output = await redirectGoogleAuth()
  }

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const jwt = queryParams.get('jwt');

    if (jwt) {
      sessionStorage.setItem('authToken', jwt);
      setIsPopupOpen(true)
      handleAuthenticationProcess();
    }
  }, [location, dispatch]);

  // Button click handler
  const onButtonClick = () => {
    handleLogin();
  };

  return (
    <div className="w-full h-full flex justify-center">
    <div className="absolute top-[60%] flex flex-col justify-center">
      <div
        className="w-[298px] h-[68px] z-1 bg-[#E1F076] rounded-[100px] cursor-pointer flex items-center justify-center"
        onClick={handleLogin}
      >
        <span className={`${styles.heading1} !text-[#202117]`}>SIGNUP</span>
      </div>

      <div className="flex flex-col items-center mt-[30px] gap-[10px]">
        <div className={`${styles.subtext} !text-[#FFFFFF] !font-regular`}>
          Already a user
        </div>
        <div className={`${styles.subtext} !text-[#E1F076]`}>
          Continue with your account
        </div>
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
export default FetchDetails;
