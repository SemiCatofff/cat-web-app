import React, { useState, useEffect } from 'react'
import styles from '../../styles/style'
import { useNavigate } from 'react-router-dom'
import { ChallengeCard, Popup } from '../../components/index'
import {  targetbg,  arrow,  graphic1,  graphic2,  yellowarrow,} from '../../assets/images'
import { useParams } from 'react-router-dom'
import {  getChallenges,  joinChallengeAPI,  getUserChallenges,} from '../../utils/ApiCalls'
import moment from 'moment'
import hippo from '../../assets/images/hippo.png'

function ChallengeDetails() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [joinSuccess, setJoinSuccess] = useState(true)
  const [active, setActive] = useState([])

  const navigate = useNavigate()
  const params = useParams()
  const [challengeDetails, setChallengeDetails] = useState([])

  const getChallengeData = async () => {
    const output = await getChallenges(params.id)
    if (output.success) {
      setChallengeDetails(output.data)
      localStorage.setItem('type', output.data.ParticipationType)
    }
  }
  const userChallenges = async () => {
    const output = await getUserChallenges()
    const activeChallenges = output.map((item) => item.ChallengeID)
    setActive(activeChallenges)
  }

  useEffect(() => {
    getChallengeData()
    userChallenges()
  }, [])

  const handleOpenPopup = () => {
    if (active.includes(parseInt(params.id))) {
      navigate(`/details/${params.id}`)
    } else {
      setIsPopupOpen(true)
    }
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
    setIsLoading(false)
    setIsConfirmed(false)
  }

  const joinChal = async () => {
    const output = await joinChallengeAPI(params.id)
    setIsLoading(false)
    if (output.success) {
      setIsConfirmed(true)
      setJoinSuccess(true)
    } else {
      setIsConfirmed(true)
      setJoinSuccess(false)
    }
  }

  const handleSliderConfirm = () => {
    setIsLoading(true)
    joinChal()
  }

  const goToDashboard = () => {
    navigate(`/details/${params.id}`)
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
            🎉 You are in! 🎉
          </p>
          <img src={graphic2} alt="Checkmark" className="mx-auto mt-5" />
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
        <h2 className={`${styles.heading1} !text-black px-8`}>
          Confirm Payment Of{' '}
          <span className="text-purple-500">
            {' '}
            {challengeDetails.Wager} Credits?
          </span>{' '}
        </h2>
        <img src={graphic1} alt="" className="mx-auto mt-10" />
        <div
          className="slide-button flex items-center justify-center bg-yellow rounded-full !text-black py-5 mt-10 flex "
          onClick={handleSliderConfirm}
        >
          {/* <div className="h-14 w-14 ml-2 my-auto bg-white rounded-full ">
            <img src={doubleright} className="mx-auto mt-4" />
          </div> */}
          <p className={`text-center my-auto !text-black ${styles.heading2}`}>
            CONFIRM
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <div className={`mb-20`}>
        <ChallengeCard
          // id={challengeDetails.ChallengeID}
          id={params.id}
          type={challengeDetails.GameType}
          name={challengeDetails.ChallengeName}
          people={challengeDetails.PlayersJoined}
          date={moment(parseInt(challengeDetails.StartDate, 10)).format(
            'D MMM, YYYY'
          )}
          wager={challengeDetails.Wager}
          prize={challengeDetails.TotalWagerStaked}
        />
        <div className={`${styles.marginY} ${styles.marginX}`}>
          <h1 className={`${styles.subheading2} !text-gray-500`}>
            About the Challenge
          </h1>
          <p className={`${styles.paragraph} mt-4 !text-gray-500`}>
            {challengeDetails.ChallengeDescription}
          </p>
        </div>
        <div className={`${styles.marginY} ${styles.marginX}`}>
          <h1 className={`${styles.subheading2} !text-gray-500`}>
            Important Points
          </h1>
          <ul>
            <li className={`${styles.paragraph} mt-4 !text-gray-500`}>
              - Outdoor Challenge
            </li>
            <li className={`${styles.paragraph} mt-1 !text-gray-500`}>
              - Tracker Device Should be On
            </li>
            <li className={`${styles.paragraph} mt-1 !text-gray-500`}>
              - Malpractices will not be encouraged
            </li>
          </ul>
        </div>
        {/* <div className={`${styles.marginY} ${styles.marginX}`}>
          <h1 className={`${styles.subheading2} !text-gray-500 mb-4`}>
            People Joined
          </h1>
          <img src={avatargrp2} alt="" />
        </div> */}

        <div className={`${styles.marginY} ${styles.marginX} relative`}>
          <img src={targetbg} alt="" className="w-full" />
          <div className={` absolute top-4 w-full `}>
            <div className={`flex justify-between ${styles.marginX}`}>
              <p className={`${styles.subheading}`}>Target</p>
              <p className={`${styles.subheading}`}>
                {' '}
                {!moment(parseInt(challengeDetails.StartDate)).isBefore(
                  moment()
                )
                  ? 'Starts in'
                  : 'Started'}{' '}
              </p>
            </div>
          </div>
          <div className={` absolute bottom-4 w-full `}>
            <div className={`flex justify-between ${styles.marginX}`}>
              <p className={`${styles.heading2} text-yellow`}>
                {challengeDetails.Target} steps in{' '}
                {moment
                  .duration(
                    moment(parseInt(challengeDetails.EndDate)).diff(
                      moment(parseInt(challengeDetails.StartDate))
                    )
                  )
                  .humanize()}
              </p>
              <p className={`${styles.heading2} !text-gray-400`}>
                {' '}
                {moment
                  .duration(
                    moment(parseInt(challengeDetails.StartDate)).diff(moment())
                  )
                  .humanize()}
              </p>
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className={`${styles.marginX} flex justify-between mt-6`}>
          <div className="credit py-5">
            <h1 className={`${styles.heading2} !text-black`}>
              {challengeDetails.Wager} Credit
            </h1>
            <p className={`${styles.caption1} !text-gray-500 `}>Wager Amount</p>
          </div>
          <div
            className="button rounded-full bg-yellow px-8 py-5 my-auto"
            onClick={handleOpenPopup}
          >
            <h1 className={`${styles.heading2} !text-black flex `}>
              {' '}
              <span className="my-auto">
                {!active.includes(parseInt(params.id))
                  ? 'JOIN NOW'
                  : 'VIEW STATUS'}
              </span>{' '}
              <span className="-mr-2 ">
                <img src={arrow} alt="" className="h-8 w-8 my-auto" />
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
    </>
  )
}

export default ChallengeDetails
