import React from 'react'
import profile from '../../assets/images/prof.png'
import styles from '../../styles/style'
import crown from '../../assets/images/crown.png'
import { useNavigate } from 'react-router-dom'

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

const Competitor = ({ profileSrc, name, steps, isWinner, hval, index}) => (
  <div className="w-[43%] h-full flex flex-col items-center relative gap-[15px]">
    {isWinner && (
      <span className={`${styles.buttoncta2} !text-[#202117] mb-[6px]`}>Winner</span>
    )}

    <div className="">
      {isWinner && (
        <div className="absolute top-[24px] left-[38%]">
          <img src={crown} alt=""></img>
        </div>
      )}
      <img
        className={`w-[${hval}px] h-[${hval}px] border-4 border-[#E1F076] rounded-full z-10`}
        src={profile}
        alt={`${name}`}
      />

      <div
        className={`absolute ${'bottom-11'} h-[28px] w-[28px] left-[40%] rounded-full bg-[#E1F076] flex items-center justify-center`}
      >
        <div className={`${styles.subtext} !text-black font-semibold`}>{index}</div>
      </div>
    </div>

    <div className="flex flex-col items-center z-20">
      <span className={`${styles.subheading} !text-[#202117]`}>{name}</span>
      <span className={`${styles.subtext} !text-[#202117]`}>{steps} Steps</span>
    </div>

    {/* {isWinner && <div className="h-[5px]"> </div>} */}
  </div>
)


const StepUpChallenge = ({ live }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col mx-4 mt-4 items-center justify-center">
      <div className="flex items-end w-[90%] mt-1">
        <Competitor isWinner={false} name={'Megan Jess'} steps={100} hval={80} index={2} />
        <div className="w-[14%] h-[100px] flex justify-center">
          <div className={`${styles.buttoncta2} !text-[#202117]`}>v/s </div>
        </div>
        <Competitor isWinner={true} name={'Bryan Wolf'} steps={100} hval={84} index={1} />
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
      <div className='flex flex-col items-center justify-center mt-[20px] gap-[10px]'>
        
        
        {/*
        
        will be rendered based on the date conditions
        // to be added with api integration
        
        <div className={`${styles.subtext} !text-[#202117] !font-regular`}>
           Challenge Ends in
        </div>
        <div className={`${styles.heading2} !text-[#202117]`}>
           3 day . 60 hours . 10
        </div> */}

         <div className={`${styles.subtext} !text-[#202117] !font-regular`}>
           You won 2000 credits! 
        </div>
        <div className={`${styles.heading2} !text-[16px] flex items-center justify-center h-[68px] w-[217px] bg-[#202117] text-[#E1F076] rounded-[80px] `} onClick={()=>{ navigate("/dashboard")}}>
         CLAIM
        </div>

      </div>

      <div className="relative w-full h-[85px] mx-4 mt-6 mb-4 rounded-box bg-[#192126] flex flex-col items-center justify-center gap-[9px]">
        <div
          className="absolute inset-0 bg-trophy bg-right bg-no-repeat right-3"
          style={{ opacity: '80%' }}
        ></div>
      </div>
    </div>
  )
}

export default StepUpChallenge
