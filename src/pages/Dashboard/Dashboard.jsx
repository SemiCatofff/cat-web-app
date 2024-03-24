import React from 'react'
import styles from '../../styles/style'
import { homeHeader, stake, reward } from '../../assets/images'

const Dashboard = () => {
  return (
    <>
      <div className={`${styles.paddingX}`}>
        <div className="relative">
          <div className="w-full absolute z-20 flex  justify-center">
            <div className="flex-col">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                srcset=""
                className="rounded-full w-32 h-32 object-cover
              "
              />
              <h1 className={`${styles.heading2} text-center pt-4`}>
                Alice James
              </h1>
              <h1 className={`${styles.paragraph} text-white text-center pt-2`}>
                alicejames21@gmail.com
              </h1>
              <h1 className={`${styles.paragraph} text-white text-center pt-1`}>
                52fs5ge5g45sov45a
              </h1>
            </div>
          </div>
        </div>
        <img src={homeHeader} alt="" className="pt-20 w-full" />
      </div>

      <div className={`${styles.paddingX} ${styles.marginY} `}>
        <div
          className={`flex justify-around bg-white rounded-xl ${styles.paddingX} ${styles.paddingY} py-8`}
        >
          <div className="flex">
            <img src={reward} alt="img" />
            <div className="texts ml-4">
              <p className={`${styles.caption1} !text-black`}>Wager Earned</p>
              <p className={`${styles.heading2} !text-black`}>3 SOL</p>
            </div>
          </div>

          <div className="flex">
            <img src={stake} alt="img" />
            <div className="texts ml-4">
              <p className={`${styles.caption1} !text-black`}>Wager Earned</p>
              <p className={`${styles.heading2} !text-black`}>3 SOL</p>
            </div>
          </div>
        </div>
      </div>

      <div className={` ${styles.paddingX} ${styles.flexBetween}`}>
        <p className={`${styles.subheading} !text-black`}>History</p>
        <a href="" className={`${styles.paragraph} !text-black`}>
          View All
        </a>
      </div>

      <div className={`${styles.paddingX} ${styles.marginY}`}>
        <div
          className={`flex justify-between bg-white rounded-xl ${styles.paddingX} px-6 ${styles.paddingY} py-4`}
        >
          <div className="flex">
            <div className="w-12 h-12 rounded-full bg-[#FFF5D9] text-center my-auto">
              <p className={`${styles.subheading} my-3 text-black`}>1</p>
            </div>
            <div className="texts ml-4 my-auto">
              <p className={`${styles.heading2} !text-black`}>
                Self Up Challenge
              </p>
              <p className={`${styles.caption1} !text-black`}>
                24th January 2024
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="texts ml-4 my-auto">
              <p className={`${styles.subheading2} !text-amber-400`}>- 2 SOL</p>
              <p className={`${styles.caption1} !text-black`}>Unranked</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.marginY}`}>
        <div
          className={`flex justify-between bg-white rounded-xl ${styles.paddingX} px-6 ${styles.paddingY} py-4`}
        >
          <div className="flex">
            <div className="w-12 h-12 rounded-full bg-[#FFF5D9] text-center my-auto">
              <p className={`${styles.subheading} my-3 text-black`}>1</p>
            </div>
            <div className="texts ml-4 my-auto">
              <p className={`${styles.heading2} !text-black`}>
                Self Up Challenge
              </p>
              <p className={`${styles.caption1} !text-black`}>
                24th January 2024
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="texts ml-4 my-auto">
              <p className={`${styles.subheading2} !text-amber-400`}>- 2 SOL</p>
              <p className={`${styles.caption1} !text-black`}>Unranked</p>
            </div>
          </div>
        </div>
      </div>

      <div className={` ${styles.paddingX} ${styles.flexBetween}`}>
        <p className={`${styles.subheading} !text-black`}>Reward Chart</p>
        <a href="" className={`${styles.paragraph} !text-black`}>
          View All
        </a>
      </div>
    </>
  )
}

export default Dashboard
