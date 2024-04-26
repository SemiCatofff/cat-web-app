import React, { useEffect, useState } from 'react'
import styles from '../../styles/style'
import {  homeHeader,  award2, star,  user,  edit, addd, yellowarrow,} from '../../assets/images'
import { Popup } from '../../components/index'
import { getUserDetails,  getUserChallenges,  withDrawApi,} from '../../utils/ApiCalls'
import ChallengeSlider from '../../components/ChallengeSlider/ChallengeSlider'
import { useDispatch } from 'react-redux'
import { setLoginState } from '../../redux/actions/actions'
import HistoryItem from '../../components/HistoryItem/HistoryItem'
import Profile from '../../components/Profile.jsx/Profile'
import { setPopupState } from '../../redux/actions/actions'
import DashboardPopup from "../../components/Popup/DashboardPopup"
import moment from 'moment'

const Dashboard = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [history, setHistory] = useState([])
  const [details, setDetails] = useState([])
  const [solTok, setSolTok] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [joinSuccess, setJoinSuccess] = useState(false)
  const [state, setState] = useState(0)
  const [amount, setAmount] = useState(100)


  const dispatch = useDispatch()
  const handleClosePopup = () => {
    setIsPopupOpen(false)
    setIsLoading(false)
    setIsConfirmed(false)
    dispatch(setPopupState(false))
  }

  const withdraw = async () => {
    const output = await withDrawApi(amount)
    setIsLoading(false)
    if (output.success) {
      setIsConfirmed(true)
      setJoinSuccess(true)
    } else {
      setIsConfirmed(true)
      setJoinSuccess(false)
    }
    
  }

  const deposit = async () => {
    setIsLoading(false)
    if (true) {
      setIsConfirmed(true)
      setJoinSuccess(true)
    } else {
      setIsConfirmed(true)
      setJoinSuccess(false)
    }
  }

  const handleOpenPopup = () => {
    dispatch(setPopupState(true))
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
    dispatch(setPopupState(false))
    handleClosePopup()
  }


  const getDetails = async () => {
    const output = await getUserDetails()
    if(output.success){

    
    setDetails(output.data)

    let tok =
      output.data.Portfolio.tokens.length > 0
        ? output.data.Portfolio.tokens[0].quantity + ' ' + output.data.Portfolio.tokens[0].token_name
        : 'No tokens'
    setSolTok(tok)
    }
    
    const histor = await getUserChallenges()
    setHistory(histor.data)
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
      await navigator.clipboard.writeText('https://game.catoff.xyz')
      alert('Link copied to clipboard!')
    } catch (err) {
      alert('failed to Share')
    }
  }
  return (
    <>
     <Profile solTok={solTok} details ={details}/>

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
        content={<DashboardPopup isLoading={isLoading} isConfirmed={isConfirmed} joinSuccess={joinSuccess} goToDashboard={goToDashboard} setAmount={setAmount} handleSliderConfirm={handleSliderConfirm} amount={amount} state={state}/>}
        onClose={handleClosePopup}
      />

      {history.filter((item) => !moment(parseInt(item.EndDate)).isBefore(moment())).length > 0 && (
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
        items={history.filter((item) => !moment(parseInt(item.EndDate)).isBefore(moment()))}
      />
      {history.filter((item) => moment(parseInt(item.EndDate)).isBefore(moment())).length >
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
          .filter((item) =>  moment(parseInt(item.EndDate)).isBefore(moment()))
          .map((item, index) => {
            return ( <HistoryItem item ={item} index={index}e /> )
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
