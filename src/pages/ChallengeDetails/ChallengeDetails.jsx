import React, { useState, useEffect } from 'react'
import styles from '../../styles/style'
import { useNavigate } from 'react-router-dom'
import { ChallengeCard, Popup } from '../../components/index'
import {
  avatargrp2,
  targetbg,
  arrow,
  graphic1,
  graphic2,
  doubleright,
  yellowarrow,
} from '../../assets/images'
import { useParams } from 'react-router-dom'
import { getChallenges } from '../../utils/ApiCalls'
import moment from 'moment'

function ChallengeDetails() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)
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

  useEffect(() => {
    getChallengeData()
  }, [])

  const handleOpenPopup = () => {
    setIsPopupOpen(true)
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
    setIsLoading(false)
    setIsConfirmed(false)
  }

  const handleSliderConfirm = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsConfirmed(true)
    }, 2000)
  }

  const goToDashboard = () => {
    navigate(`/challenge/${params.id}`)
  }

  const popupContent = isLoading ? (
    <div className="loader">Loading...</div>
  ) : isConfirmed ? (
    <div className={`!z-40`}>
      <div className={`${styles.paddingX} ${styles.paddingY}  text-center`}>
        <h2 className={`${styles.heading1} !text-black `}>Congratulations!</h2>
        <p className={`${styles.subheading2} !text-black mt-6`}>
          🎉 You are in! 🎉
        </p>
        <img src={graphic2} alt="Checkmark" className="mx-auto mt-5" />
        <button
          className=" bg-black rounded-full py-6 mt-6 flex w-full"
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
      <div className={`${styles.paddingX} ${styles.paddingY}  text-center`}>
        <h2 className={`${styles.heading1} !text-black px-8`}>
          Confirm Payment Of{' '}
          <span className="text-purple-500">2K Credits?</span>{' '}
        </h2>
        <img src={graphic1} alt="" className="mx-auto mt-10" />
        <div
          className="slide-button bg-yellow rounded-full !text-black py-2 mt-10 flex "
          onClick={handleSliderConfirm}
        >
          <div className="h-14 w-14 ml-2 my-auto bg-white rounded-full ">
            <img src={doubleright} className="mx-auto mt-4" />
          </div>
          <p
            className={`text-center my-auto ml-8 !text-black ${styles.heading2}`}
          >
            SLIDE TO CONFIRM
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <div className={`mb-20`}>
        <ChallengeCard
          id={challengeDetails.ChallengeID}
          type={challengeDetails.ChallengeID}
          name={challengeDetails.ChallengeName}
          people={100}
          date={moment(parseInt(challengeDetails.StartDate, 10)).format(
            'D MMM, YYYY'
          )}
          wager={challengeDetails.Wager}
          prize={10 * 100}
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
              - Dorem ipsum dolor sit amet
            </li>
            <li className={`${styles.paragraph} mt-1 !text-gray-500`}>
              - Dorem ipsum dolor sit amet
            </li>
            <li className={`${styles.paragraph} mt-1 !text-gray-500`}>
              - Dorem ipsum dolor sit amet
            </li>
            <li className={`${styles.paragraph} mt-1 !text-gray-500`}>
              - Dorem ipsum dolor sit amet
            </li>
          </ul>
        </div>
        <div className={`${styles.marginY} ${styles.marginX}`}>
          <h1 className={`${styles.subheading2} !text-gray-500 mb-4`}>
            People Joined
          </h1>
          <img src={avatargrp2} alt="" />
        </div>

        <div className={`${styles.marginY} ${styles.marginX} relative`}>
          <img src={targetbg} alt="" className="w-full" />
          <div className={` absolute top-4 w-full `}>
            <div className={`flex justify-between ${styles.marginX}`}>
              <p className={`${styles.subheading}`}>Target</p>
              <p className={`${styles.subheading}`}>Starts in</p>
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
              <span className="my-auto">JOIN NOW</span>{' '}
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
