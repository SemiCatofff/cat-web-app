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
import { getUserDetails, getUserChallenges, createWallet, logout} from '../../utils/ApiCalls'

const Dashboard = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [history, setHistory] = useState([])
  const [details, setDetails] = useState([])

  const handleOpenPopup = () => {
    setIsPopupOpen(true)
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
  }
  const handleConfirmation = () => {
    // Handle the confirmation logic here, such as going to the next screen
    setIsPopupOpen(false)
  }

  const getDetails = async () => {
    //these apis don't have error states
    const output = await getUserDetails()
    setDetails(output)

    const histor = await getUserChallenges()
    setHistory(histor)
  }

  useEffect(() => {
    getDetails()
  }, [])

  const walletCreation = async () =>{
    const output = await logout();
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
              <h1
                className={`${styles.paragraph} text-white text-center pt-1`}
              ></h1>
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
            className={`${styles.caption1} !text-black px-4 py-2 rounded-full bg-purple-100 flex relative`}
          >
            <span>
              <img src={star} alt="" className="" />
            </span>{' '}
            <span className="my-auto mr-1"> Total </span>{' '}
            <span className="font-bold my-auto">{details.Credits}</span>{' '}
            <span className="absolute -right-3 top-2">
              <img src={addd} className="w-5" />
            </span>
          </div>
          <div
            className={`${styles.caption1} !text-black px-4 py-2 rounded-full bg-purple-100 `}
          >
            Wagered <span className="font-bold">{details.CurrentStaked}</span>
          </div>
        </div>

        <div className="mx-4 pb-2">
          <img src={award2} alt="awardicon" className="mx-auto" />
          <div className="button rounded-full bg-purple-100 pl-6 mb-4 -mt-3.5">
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
                onClick={handleOpenPopup}
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
        content={
          <div classname={`!z-40`}>
            <div
              className={`${styles.paddingX} ${styles.paddingY}  text-center`}
            >
              <h2 className={`${styles.heading1} !text-black `}>
                Confirm Payment Of <br />
                <span className="text-purple-500">2K Credits?</span>{' '}
              </h2>
              <img src={graphic1} alt="" className="mx-auto mt-5" />
              <div className="slide-button bg-yellow rounded-full !text-black py-3 mt-6 flex ">
                <div className="h-14 w-14 ml-2 my-auto bg-white rounded-full ">
                  <img src={doubleright} className="mx-auto mt-4" />
                </div>
                <p
                  className={`text-center my-auto  ml-8 !text-black ${styles.heading2}`}
                >
                  SLIDE TO CONFIRM
                </p>
              </div>
            </div>
          </div>
        }
        onClose={handleClosePopup}
      />
      {/* history Title */}
      <div className={` ${styles.paddingX} ${styles.flexBetween}`}>
        <p className={`${styles.subheading} !text-black`}>History</p>
        <a href="" className={`${styles.paragraph} !text-black`}>
          View All
        </a>
      </div>

      {/* History */}
      <div className={`${styles.paddingX} ${styles.marginY} flex flex-col gap-[6px]`}>
        {history.map((item, index) => {
          return (
            <div
              className={`flex justify-between bg-white rounded-xl ${styles.paddingX} px-6 ${styles.paddingY} py-4 shadow`}
            >
              <div className="flex">
                <div className="w-12 h-12 rounded-full bg-[#FFF5D9] text-center">
                  <p className={`${styles.subheading} !text-black my-3.5`}>{index+1}</p>
                </div>
                <div className="texts ml-4 my-auto">
                  <p className={`${styles.subheading2} !text-black`}>
                    {item.ChallengeName}
                  </p>
                  <p className={`${styles.caption2} !text-gray-500`}>
                    24th January 2024
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="texts ml-4 my-auto">
                  <p className={`${styles.subheading2} !text-amber-400`}>
                    - 2 SOL
                  </p>
                  <p
                    className={`${styles.caption1} !text-gray-500 flex justify-center`}
                  >
                    {' '}
                    {item.Rank}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {/* Buttons */}
      <div className={`${styles.paddingX} ${styles.marginY} mb-40`}>
        <div className="button rounded-full bg-yellow px-8 py-5 my-auto mb-2">
          <h1 className={`${styles.heading2} !text-black flex justify-center`}>
            {' '}
            <span className="mr-2 ">
              <img src={user} alt="" className="h-5 w-5 my-auto" />
            </span>{' '}
            <span className="my-auto">INVITE YOUR FRIEND</span>{' '}
          </h1>
        </div>
        <div className="button rounded-full bg-black px-8 py-5 my-auto mb-4">
          <h1 className={`${styles.heading2}  flex justify-center`}>
            {' '}
            <span className="my-auto" onClick={walletCreation}> LOGOUT </span>{' '}
            <span className="-mr-2 ">
              <img src={arrow} alt="" className="h-8 w-8 my-auto" />
            </span>{' '}
          </h1>
        </div>
      </div>
    </>
  )
}

export default Dashboard
