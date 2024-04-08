import React from 'react'
import profile from '../../assets/images/prof.png'
import styles from '../../styles/style'
import { useNavigate } from 'react-router-dom'
import discord from '../../assets/images/dis.png'
import ig from '../../assets/images/in.png'
import tg from '../../assets/images/tg.png'
import { useState } from 'react'


const calculateHeight = (steps, maxSteps) => {
  const maxHeight = 250
  return Math.floor(((maxSteps - steps) / maxSteps) * maxHeight)
}
const LeaderboardItem = ({ steps, maxSteps }) => {
  const barHeight = calculateHeight(steps, maxSteps)

  return (
    <div className="flex flex-col w-[50%] justify-end items-center gap-[20px]">
      <div
        className="bottom-0 rounded-t-xl w-[70px] bg-[#E1F076]"
        style={{ height: `${250}px` }}
      >
        <div
          className=" bottom-0 rounded-t-xl w-[70px] bg-[#6F6F6F]"
          style={{ height: `${barHeight}px` }}
        ></div>
      </div>
    </div>
  )
}

const DareLeader = ({ target, type, isActive,ends, leaderBoard, creator, creatorImg }) => {
  const navigate = useNavigate()
  const [people, setPeople] = useState(leaderBoard || []);

  return (
    <div className="flex flex-col mx-4 mt-4 items-center justify-center">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center my-2">
          <img
            className="w-[48px] h-[48px] border-4 border-yellow rounded-full mr-2"
            src={people.length > 0 ? people[0].profilePicture: ""}
            alt="Participant"
          />
          <div className="flex flex-col">
            <span
              className={`${styles.subheading} !text-[#9A9C95] !font-regular !text-[13px]`}
            >
              Participant
            </span>
            <span className={`${styles.subheading} !text-[#000000]`}>{ people[0].username}</span>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex flex-col items-end mr-2">
            <span
              className={`${styles.subheading} !text-[#9A9C95] !font-regular !text-[13px]`}
            >
              Challenger
            </span>
            <span className={`${styles.subheading} !text-[#000000]`}>
             { creator}
            </span>
          </div>
          <img
            className="w-[48px] h-[48px] border-4 border-yellow rounded-full"
            src={creatorImg}
            alt="Challenger"
          />
        </div>
      </div>

      <div className="flex w-[90%] mt-4 justify-center">
        <div className="flex flex-col items-center justify-center">
          <LeaderboardItem steps={people[0].value} maxSteps={target} />
        </div>
      </div>
      <div className="h-[3px] w-[296px] bg-[#6F6F6F] bg-opacity-35"></div>
      <div className="flex flex-col items-center justify-center mt-[20px] gap-[10px]">
        
        
       { !isActive?
       <>
        <div className={`${styles.subtext} !text-[#202117] !font-regular`}>
           Challenge Ends in
        </div>
        <div className={`${styles.heading2} !text-[#202117]`}>
           {ends}
        </div>
        </> 
        :
   <>
        <div className={`${styles.subtext} !text-[#202117] !font-regular`}>
          You won 2000 credits!
        </div>
        <div
          className={`${styles.heading2} !text-[16px] flex items-center justify-center h-[68px] w-[217px] bg-[#202117] !text-[#E1F076] rounded-[80px] `}
          onClick={() => {
            navigate('/dashboard')
          }}
        >
          CLAIM
        </div>
        </> 

}
      </div>

      <div className="relative w-full h-[85px] mx-4 my-6 rounded-box bg-[#192126] flex items-center justify-center gap-[7%]">
        <div
          className="absolute inset-0 bg-trophy bg-right bg-no-repeat right-3"
          style={{ opacity: '80%' }}
        ></div>
        <div
          className={`${styles.heading2} !text-[16px] flex items-center justify-center`}
        >
          {' '}
          Share
        </div>
        <img src={ig} alt=""></img>
        <img src={tg} alt=""></img>
        <img src={discord} alt=""></img>
        {/* <img src={discord} alt=""></img> */}
      </div>
    </div>
  )
}

export default DareLeader
