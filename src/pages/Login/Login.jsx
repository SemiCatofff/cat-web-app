import { setLoginState } from '../../redux/actions/actions'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  authenticateAPI,
  createWallet,
  getRefreshTokenAPI,
  setPinAPI,
  redirectGoogleAuth,
} from '../../utils/ApiCalls'
import { useDispatch } from 'react-redux'
import styles from '../../styles/style'

import React, { useEffect, useState } from 'react'
import { Popup } from '../../components'
import {
  login,
  arrowChevron,
  yellowarrow,
  arrow,
} from '../../assets/images/index'

function Login() {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const handleClosePopup = () => {
    setIsPopupOpen(false)
  }

  const popupContent = (
    <div className={`!z-40`}>
      <div className={`${styles.paddingX} ${styles.paddingY}  text-center`}>
        <h2 className={`${styles.heading1} !text-black `}>Please wait!</h2>
        <p className={`${styles.subheading2} !text-black mt-6`}>
          🎉 Processing Your Request! 🎉
        </p>

        <div className="loader animate-spin rounded-full border-t-4 border-b-4 border-yellow h-12 w-12 mx-auto mt-8"></div>
      </div>
    </div>
  )

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const jwt = queryParams.get('jwt')
    if (jwt && !sessionStorage.getItem("authProcess")) {
      sessionStorage.setItem("authProcess", "false")
      setIsPopupOpen(true)
      sessionStorage.setItem('authToken', jwt)
      handleAuthenticationProcess()
    }
  }, [])

  const handleGoogleLogin = async () => {
    try {
      const output = await redirectGoogleAuth()
      setCurrentStep(currentStep + 1)
    } catch (error) {
      console.error('Error during login:', error)
    }
  }

  const handleAuthenticationProcess = async () => {
    const output = await authenticateAPI()
    if (output.authentication.status === 'success' && output.wallet.status === 'success') {
      const refreshToken = await getRefreshTokenAPI()
      if (refreshToken.status === "success") {
        dispatch(setLoginState(true))
        navigate('/')
        sessionStorage.setItem("authProcess", "true")
      } else {
        setIsPopupOpen(false)
      }
    } else {
      setIsPopupOpen(false)
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="content z-1">
            <div
              className={`${styles.heading1} text-center mt-10 !text-black px-10`}
            >
              Own Your Wager ✨ Own Your Wins
            </div>

            <div className="text-center mt-4 cursor-pointer flex justify-center px-6  text-stone-900 text-sm font-normal font-['Inter'] ">
              Decentralized competition, instant crypto payouts: Get your game
              on with Catoff.
            </div>
            <div
              className={`${styles.heading2} mt-8`}
              onClick={() => setCurrentStep(2)}
            >
              <div className="h-16 py-3.5 bg-yellow  rounded-full justify-center items-center inline-flex w-full">
                <div className="w-full text-center text-black flex justify-center">
                  LET'S GET YOU STARTED
                  <img src={arrow} alt="" className="-mt-0.5 ml-2 w-6" />
                </div>
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="content z-1">
            <div
              className={`${styles.heading1} text-center mt-10 !text-black px-12`}
            >
              Welcome To <br />
              Catoff Gaming 🔥
            </div>
            <div
              className={`${styles.heading2} mt-8`}
              onClick={handleGoogleLogin}
            >
              <div className="h-16 py-3.5 bg-stone-900  rounded-full justify-center items-center inline-flex w-full">
                <div className="w-full text-center text-yellow flex justify-center">
                  SIGN UP{' '}
                  <img src={yellowarrow} alt="" className="-mt-1 ml-2" />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="w-80 h-4 opacity-50 justify-start items-center gap-5 inline-flex">
                <div className="grow shrink mt-5 p-2 border-dashed  border-t-2 border-stone-900" />
                <div className="justify-start items-center gap-5 flex">
                  <div className="text-center text-stone-900 text-sm font-normal font-['Inter'] leading-none">
                    Already our user?
                  </div>
                </div>
                <div className="grow shrink mt-5 p-2 border-dashed border-t-2 border-stone-900" />
              </div>
            </div>
            <div className="text-center mt-8 cursor-pointer flex justify-center  text-stone-900 text-sm font-normal font-['Inter'] leading-none">
              Continue with your account{' '}
              {/* <img src={arrowChevron} alt="arrow" className="mx-2 mt-0.5" /> */}
            </div>
          </div>
        )

      default:
        return <p>Loading</p>
    }
  }

  return (
    <div
      className={`${styles.marginX} ${styles.marginY} ${styles.flexCenter} flex-col relative`}
    >
      <img src={login} alt="Logo" className="w-full" />
      <div className="content z-50">
        {renderStepContent()}
        <div className="flex justify-center mt-4">
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 mx-1 rounded-full ${currentStep === index + 1 ? 'bg-black' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
      <Popup
        isOpen={isPopupOpen}
        content={popupContent}
        onClose={handleClosePopup}
      />
    </div>
  )
}
export default Login
