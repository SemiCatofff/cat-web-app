import React, { useEffect, useState } from 'react'
import styles from '../../styles/style'
import {
  homeHeader,
  arrow,
  award2,
  star,
  user,
  edit,
  addd,
  yellowarrow,
  graphic1,
  doubleright,
} from '../../assets/images'
import { Popup } from '../../components/index'
import {
  getUserDetails,
  getUserChallenges,
  withDrawApi,
} from '../../utils/ApiCalls'
import moment from 'moment'
import ChallengeSlider from '../../components/ChallengeSlider/ChallengeSlider'
import { useDispatch } from 'react-redux'
import { setLoginState } from '../../redux/actions/actions'
import hippo from '../../assets/images/hippo.png'

const Dashboard = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [history, setHistory] = useState([])
  const [details, setDetails] = useState([])
  const [solTok, setSolTok] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [joinSuccess, setJoinSuccess] = useState(false)
  const [state, setState] = useState(0)
  const [amount, setAmount] = useState(1000)

  const dispatch = useDispatch()
  const handleClosePopup = () => {
    setIsPopupOpen(false)
    setIsLoading(false)
    setIsConfirmed(false)
  }
  const messages = [
    {
      mess1: 'Withdraw Credits Rules',
      mess2: 'How Many Points to withdraw',
      success: 'Rewards Claimed',
    },
    {
      mess1: 'Buying Credits Rules',
      mess2: 'How Many Points You wanna buy ?',
      success: 'Transaction success',
    },
  ]

  const withdraw = async () => {
    const output = await withDrawApi(amount)
    
    setIsLoading(false)
    console.log(output.status)
    if (output.status) {
      setIsConfirmed(true)
      setJoinSuccess(true)
    } else {
      setIsConfirmed(false)
      setJoinSuccess(false)
    }
  }

  const deposit = async () => {
    setIsLoading(false)
    //here goes the call to deposit
    if (true) {
      setIsConfirmed(true)
      setJoinSuccess(true)
    } else {
      setIsConfirmed(true)
      setJoinSuccess(false)
    }
  }

  const handleOpenPopup = () => {
    setIsPopupOpen(true)
  }
  const handleSliderConfirm = () => {
    setIsLoading(true)
    if (state === 0) {
      withdraw()
    } else {
      deposit()
    }
  }

  const goToDashboard = () => {
    handleClosePopup()
  }

  const popupContent = isLoading ? (
    <div className={`!z-40`}>
      <div className={`${styles.paddingX} ${styles.paddingY}  text-center`}>
        <h2 className={`${styles.heading1} !text-black `}>Please wait!</h2>
        <p className={`${styles.subheading2} !text-black mt-6`}>
          🎉 Processing Your Request! 🎉
        </p>

        <div className="loader animate-spin rounded-full border-t-4 border-b-4 border-yellow h-12 w-12 mx-auto mt-8"></div>
      </div>
    </div>
  ) : isConfirmed ? (
    joinSuccess ? (
      <div className={`!z-40`}>
        <div className={`${styles.paddingX} ${styles.paddingY}  text-center`}>
          <h2 className={`${styles.heading1} !text-black `}>
            Congratulations!
          </h2>

          <p className={`${styles.subheading2} !text-black mt-6`}>
            🎉 Request successfully registered! 🎉
          </p>

          <button
            className=" bg-black rounded-full py-5 mt-6 flex w-full"
            onClick={goToDashboard}
          >
            <p className={`${styles.heading2} !text-yellow mx-auto flex`}>
              {' '}
              GO TO DASHBOARD{' '}
              <span className="ml-3">
                <img src={yellowarrow} alt="" />
              </span>
            </p>
          </button>
        </div>
      </div>
    ) : (
      <div className={`!z-40`}>
        <div
          className={`${styles.paddingX} ${styles.paddingY} flex flex-col gap-[20px] items-center justify-center text-center`}
        >
          <h2 className={`${styles.heading1} !text-black `}>Ooops!</h2>
          <img src={hippo}></img>
          <p className={`${styles.subheading2} !text-black mt-6`}>
            Something went wrong!! Try again later
          </p>
        </div>
      </div>
    )
  ) : (
    <div className={`!z-40`}>
      <div className={`${styles.paddingX} ${styles.paddingY}  text-center`}>
        <div>
          <h2 className={`${styles.subheading} !text-black px-8 !text-[16px]`}>
            {messages[state].mess1}
          </h2>
          <h2
            className={`${styles.paragraph} !text-black !font-[400] !text-[10px] !text-[#696969]`}
          >
            Current Conversion Rate of the points are :{' '}
            <span className="!font-[600]"> 1000 credit = 1SOL</span>
          </h2>
        </div>
        <div className="mt-5">
          <h2 className={`${styles.subheading} !text-black !text-[16px]`}>
            {messages[state].mess2}
          </h2>
          <h2
            className={`${styles.paragraph} !text-black px-4 !font-[400] !text-[10px] !text-[#696969]`}
          >
            Minimum Buy: 1000 SOLs
          </h2>
        </div>
        {/* <img src={graphic1} alt="" className="mx-auto mt-10" /> */}
        <div className="flex gap-[10px] h-[40px] items-center justify-center mt-5">
          <div className="w-[30px] h-full flex items-center justify-center bg-[#EDEBF3] rounded-[12px]">
            <h2
              className={`${styles.subheading} !text-black !text-[16px] `}
              onClick={() => {
                setAmount(amount - 1)
              }}
            >
              -
            </h2>
          </div>
          <div className="w-[160px] h-full flex items-center justify-center bg-[#EDEBF3] rounded-[12px]">
            <h2 className={`${styles.subheading} !text-black !text-[16px]`}>
              {amount} credits
            </h2>
          </div>
          <div
            className="w-[30px] h-full flex items-center justify-center bg-[#EDEBF3] rounded-[12px]"
            onClick={() => {
              setAmount(amount + 1)
            }}
          >
            <h2 className={`${styles.subheading} !text-black !text-[16px]`}>
              +
            </h2>
          </div>
        </div>
        <div
          className="slide-button items-center justify-center bg-yellow rounded-full !text-black py-5 mt-10 flex "
          onClick={handleSliderConfirm}
        >
          <p className={`text-center my-auto !text-black ${styles.heading2}`}>
            CONFIRM
          </p>
        </div>

        {/* <div className="h-14 w-14 ml-2 my-auto bg-white rounded-full ">
            <img src={doubleright} className="mx-auto mt-4" />
          </div> */}
      </div>
    </div>
  )
  const getDetails = async () => {
    const output = await getUserDetails()
    setDetails(output)

    let tok =
      output.Portfolio.length > 0
        ? output.Portfolio[0].quantity + ' ' + output.Portfolio[0].token_name
        : 'No tokens'
    setSolTok(tok)

    const histor = await getUserChallenges()
    setHistory(histor)
  }

  useEffect(() => {
    getDetails()
  }, [])

  const walletLogout = async () => {
    sessionStorage.clear()
    dispatch(setLoginState(false))
  }

  const copyInviteLink = async () => {
    try {
      await navigator.clipboard.writeText('https://api.catoff.xyz')
      alert('Link copied to clipboard!')
    } catch (err) {
      alert('failed to Share')
    }
  }
  return (
    <>
      <div className={`${styles.paddingX}`}>
        <div className="relative">
          <div className="w-full absolute z-20 flex justify-center">
            <div className="flex-col">
              <img
                src={details.ProfilePicture}
                className="rounded-full w-20 h-20 object-cover mx-auto mt-10"
              />
              <div className="absolute z-40 right-4 -mt-4">
                <img src={edit} alt="" />
              </div>
              <h1 className={`${styles.heading2} text-center pt-4`}>
                {details.UserName}
              </h1>
              <h1 className={`${styles.paragraph} text-white text-center pt-2`}>
                {details.UserEmail}
              </h1>
              <h1 className={`${styles.paragraph} text-white text-center pt-1`}>
                {details.WalletAddress}
              </h1>
              <h1 className={`${styles.paragraph} text-white text-center pt-1`}>
                {' '}
                {solTok}
              </h1>
            </div>
          </div>
        </div>
        <img src={homeHeader} alt="" className="pt-20 w-full" />
      </div>

      <div
        className={`${styles.marginX} ${styles.marginY}  bg-white rounded-xl shadow`}
      >
        <div
          className={`flex justify-between  ${styles.paddingX} ${styles.paddingY} py-8 `}
        >
          <div
            className={`${styles.caption1} bg-violet-100 !text-black px-4 py-2 rounded-full bg-purple-100 flex relative`}
          >
            <span>
              <img src={star} alt="" className="" />
            </span>{' '}
            <span className="my-auto mr-1"> Total </span>{' '}
            <span className="font-bold my-auto">{details.Credits}</span>{' '}
            <span className="absolute -right-3 top-2">
              <img
                src={addd}
                className="w-5"
                onClick={() => {
                  setState(1)
                  handleOpenPopup()
                }}
              />
            </span>
          </div>
          <div
            className={`${styles.caption1} !text-black px-4 py-2 rounded-full bg-violet-100 flex`}
          >
            Wagered{' '}
            <span className="font-bold ml-1">{details.CurrentStaked}</span>{' '}
            <span>
              <img src={star} alt="" className="-mt-0.5" />
            </span>{' '}
          </div>
        </div>

        <div className="mx-4 pb-2">
          <img src={award2} alt="awardicon" className="mx-auto" />
          <div className="button rounded-full bg-violet-100 pl-6 mb-4 -mt-3.5">
            <h1
              className={`${styles.heading2} !text-black flex justify-between`}
            >
              {' '}
              <span className="my-auto  mx-auto flex flex-col">
                <p className={`${styles.caption2} !text-black `}>
                  Wager Earned
                </p>
                <p>{details.TotalRewardsWon}</p>
              </span>{' '}
              <span
                onClick={() => {
                  setState(0)
                  handleOpenPopup()
                }}
                className="-mr-2 bg-black text-yellow rounded-full px-8 py-4 flex cursor-pointer"
              >
                WITHDRAW <img src={yellowarrow} alt="" />
              </span>{' '}
            </h1>
          </div>
        </div>
      </div>

      <Popup
        isOpen={isPopupOpen}
        content={popupContent}
        onClose={handleClosePopup}
      />
      {history.filter((item) => item.IsStarted && item.IsActive).length > 0 && (
        <div className={` ${styles.paddingX} ${styles.flexBetween}`}>
          <p className={`${styles.heading2} !text-black`}>
            Your Ongoing Challenges
          </p>
          <a href="" className={`${styles.paragraph} !text-black`}>
            View All
          </a>
        </div>
      )}

      <ChallengeSlider
        items={history.filter((item) => item.IsStarted && item.IsActive)}
      />
      {history.filter((item) => !item.IsStarted && !item.IsActive).length >
        0 && (
        <div className={` ${styles.paddingX} ${styles.flexBetween}`}>
          <p className={`${styles.heading2} !text-black`}>History</p>
          <a href="" className={`${styles.paragraph} !text-black`}>
            View All
          </a>
        </div>
      )}
      <div
        className={`${styles.paddingX} ${styles.marginY} flex flex-col gap-[6px]`}
      >
        {history
          .filter((item) => !item.IsStarted && !item.IsActive)
          .map((item, index) => {
            return (
              <div
                className={`flex justify-between bg-white rounded-xl ${styles.paddingX} px-6 ${styles.paddingY} py-4 shadow`}
              >
                <div className="flex">
                  <div className="w-12 h-12 rounded-full bg-[#FFF5D9] text-center">
                    <p className={`${styles.subheading} !text-black my-3.5`}>
                      {index + 1}
                    </p>
                  </div>
                  <div className="texts ml-4 my-auto">
                    <p className={`${styles.subheading2} !text-black`}>
                      {item.ChallengeName}
                    </p>
                    <p className={`${styles.caption2} !text-gray-500`}>
                      {moment(parseInt(item.StartDate, 10)).format(
                        'D MMM, YYYY HH.mm'
                      )}
                    </p>
                  </div>

                  <div className="flex">
                    <div className="texts ml-4 my-auto">
                      <p className={`${styles.subheading2} !text-amber-400`}>
                        - {item.WagerStaked}
                      </p>
                      <p
                        className={`${styles.caption1} !text-gray-500 flex justify-center`}
                      >
                        {' '}
                        {/* {item.Rank} */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
      {/* Buttons */}
      <div className={`${styles.paddingX} ${styles.marginY} mb-40`}>
        <div
          className="button rounded-full bg-yellow px-8 py-5 my-auto mb-2"
          onClick={copyInviteLink}
        >
          <h1 className={`${styles.heading2} !text-black flex justify-center`}>
            {' '}
            <span className="mr-2 ">
              <img src={user} alt="" className="h-5 w-5 my-auto" />
            </span>{' '}
            <span className="my-auto">INVITE YOUR FRIEND</span>{' '}
          </h1>
        </div>
        <div
          className="button rounded-full bg-black px-8 py-5 my-auto mb-4"
          onClick={walletLogout}
        >
          <h1 className={`${styles.heading2}  flex justify-center`}>
            {' '}
            <span className="my-auto text-yellow"> LOGOUT </span>{' '}
            <span className="-mr-2 ">
              <img src={yellowarrow} alt="" className="h-8 w-8 my-auto" />
            </span>{' '}
          </h1>
        </div>
      </div>
    </>
  )
}

export default Dashboard
