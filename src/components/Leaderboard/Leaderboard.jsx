import React from 'react'
import profile from '../../assets/images/prof.png'
import styles from '../../styles/style'

const calculateHeight = (steps, maxSteps) => {
  const maxHeight = 260

  return Math.floor((steps / maxSteps) * maxHeight)
}

const LeaderboardItem = ({ steps, maxSteps }) => {
  const barHeight = calculateHeight(steps, maxSteps)

  return (
    <div className="flex flex-col w-[50%] justify-end items-center gap-[20px]">
      <div
        className="bottom-0 rounded-t-xl w-[70px] bg-[#E1F076]"
        style={{ height: `${barHeight + 100}px` }}
      >
        <div
          className=" bottom-0 rounded-t-xl w-[70px] bg-[#6F6F6F]"
          style={{ height: `${barHeight * 0.33}px` }}
        ></div>
      </div>
    </div>
  )
}

const Competitor = ({ profileSrc, name, steps, isWinner }) => (
  <div className="w-[43%] h-full flex flex-col items-center relative gap-[15px]">
    {isWinner && (
      <span className={`${styles.buttoncta2} !text-[#202117]`}>Winner</span>
    )}
    <img
      className="w-[80px] h-[80px] border-4 border-yellow rounded-full"
      src={profile}
      alt=""
    />
    <div className="flex flex-col items-center">
      <span className={`${styles.subheading} !text-[#202117]`}>{name}</span>
      <span className={`${styles.subtext} !text-[#202117]`}>{steps} Steps</span>
    </div>
  </div>
)

const StepUpChallenge = ({ live }) => {
  return (
    <div className="flex flex-col mx-4 mt-4 items-center justify-center">
      <div className="flex items-end w-[90%] mt-6">
        <Competitor isWinner={false} name={'Megan Jess'} steps={100} />
        <div className="w-[14%] h-[100px] flex justify-center">
          <div className={`${styles.buttoncta2} !text-[#202117]`}>v/s </div>
        </div>
        <Competitor isWinner={true} name={'Bryan Wolf'} steps={100} />
      </div>

      <div className="flex gap-[14%] w-[90%] mt-4">
        <div className="w-[43%] flex flex-col items-center justify-center">
          <LeaderboardItem steps={100} maxSteps={300} />
        </div>
        <div className="w-[43%] flex flex-col items-center justify-center">
          <LeaderboardItem steps={100} maxSteps={300} />
        </div>
      </div>

      <div className="h-[3px] w-[296px] bg-[#6F6F6F] bg-opacity-35"></div>

      <div className="relative w-full h-[85px] mx-4 mt-6 rounded-box bg-[#192126] flex flex-col items-center justify-center gap-[9px]">
        <div
          className="absolute inset-0 bg-trophy bg-right bg-no-repeat right-3"
          style={{ opacity: '80%' }}
        ></div>
      </div>
    </div>
  )
}

export default StepUpChallenge
