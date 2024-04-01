import styles from '../../styles/style'
import profile from '../../assets/images/prof.png'
import boot from '../../assets/images/boot.svg'
import bg from '../../assets/images/bg.svg'
import bullets from '../../assets/images/bullets.svg'
import { useEffect } from 'react'
import { getChallengeDashboard } from '../../utils/ApiCalls'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

function Progress({ value, target, prize, wager, type }) {
  return (
    <div className="flex flex-col mt-4 gap-[13px] ">
      <div className="h-[256px] flex justify-between mx-4 rounded-box gap-[2%]">
        <div className="bg-[#192126] relative flex flex-col justify-center items-center rounded-box w-[59%]">
          <img
            src={bg}
            className="absolute top-0 right-0 w-[90px] h-[90px]"
            alt=""
          ></img>
          <img
            src={bullets}
            className="absolute bottom-4 right-[40%]"
            alt=""
          ></img>
          <div className="w-auto flex flex-col justify-center gap-[25px]">
            <div className="flex items-center gap-[10px]">
              <img src={profile}></img>
              <div className={`flex flex-col gap-[1px] text-white`}>
                <div className={`${styles.heading2}`}>
                  {parseInt((parseInt(value) / parseInt(target)) * 100)}%
                </div>
                <div className={`${styles.paragraph} !text-[10px]`}>
                  of the goal
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src={boot}></img>
              <div className={`flex flex-col gap-[1px] text-white`}>
                <div className={`${styles.heading2}`}>{value}</div>
                <div className={`${styles.paragraph} !text-[10px]`}>
                  Total {type} counted
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-box w-[39%] gap-[2%]">
          <div className="flex flex-col justify-center bg-[#192126] rounded-box h-[49%] gap-[10%]">
            <div className="flex flex-col justify-center mx-4">
              <div className={`${styles.paragraph} !text-[10px]`}>
                Staked Wager{' '}
              </div>
              <div className={`${styles.heading2} !text-[#C5B7FF]`}>
                {wager} Credits
              </div>
            </div>
            <div className="flex flex-col justify-center mx-4">
              <div className={`${styles.paragraph} !text-[10px] `}>
                Prize Pool
              </div>
              <div className={`${styles.heading2} !text-[#D0F076]`}>
                {prize} Credits
              </div>
            </div>
          </div>

          <div className="bg-[#D0F076] border-[1px] rounded-box h-[49%] relative py-2 px-[7.5%] ">
            <div className="absolute top-1 h-[38px] w-[85%] rounded-[12px] flex items-center justify-center ">
              <div className={`${styles.heading2} !text-[#68783B]`}>
                GIVE UP ?
              </div>
            </div>

            <div className="absolute bottom-11 h-[38px] w-[85%] rounded-[12px] flex items-center justify-center ">
              <div
                className={`${styles.paragraph} !font-medium !text-[#68783B]`}
              >
                Yes, I wanna !
              </div>
            </div>
            <div className="absolute bottom-3 bg-[#192126] h-[38px] w-[85%] rounded-[12px] flex items-center justify-center ">
              <div className={`${styles.heading2} text-yellow `}>CATOFF </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[333px] mx-4 bg-[#192126] rounded-box"></div>
      <div className="relative h-[93px] mx-4 mb-[20px] rounded-box bg-[#192126] flex flex-col items-center justify-center gap-[9px]">
        <div
          className="absolute inset-0 bg-trophy bg-right bg-no-repeat right-3"
          style={{ opacity: '80%' }}
        ></div>
        <div className="w-auto flex flex-col justify-center gap-[5px]">
          <div className={`${styles.subtext} !text-[#FFFFF]`}>
            Nugget Of the Day
          </div>
          <div className={`${styles.heading2} !text-[#E1F076]`}>
            Where there is will , there’s way !
          </div>
        </div>
      </div>
    </div>
  )
}

export default Progress
