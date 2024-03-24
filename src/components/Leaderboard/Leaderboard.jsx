import React from 'react'
import profile from '../../assets/images/prof.png'

const calculateHeight = (steps, maxSteps) => {
  const maxHeight = 260

  return Math.floor((steps / maxSteps) * maxHeight)
}

const LeaderboardItem = ({ name, steps, profilePic, maxSteps }) => {
  const barHeight = calculateHeight(steps, maxSteps)

  return (
    <div className="flex flex-col w-[50%] justify-end items-center gap-[20px]">
      <div>
        <img
          className=" w-[80px] h-[80px] border-4 border-yellow rounded-full"
          src={profile}
          alt={name}
        />
      </div>

      <div className=" flex flex-col items-center">
        <span className="text-s font-semibold">{name}</span>
        <span className="text-[#000000] text-xs">{steps} Steps</span>
      </div>

      <div
        className="bottom-0 rounded-t-xl w-[70px] bg-[#D0F076]"
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

const StepUpChallenge = () => {
  const maxSteps = 50000

  return (
    <div className="flex flex-col mt-4 items-center justify-center">
      <div className="flex w-[79%] mt-2 justify-center">
        <LeaderboardItem
          name="Bryan Wolf"
          steps={30000}
          profilePic="/path-to-bryan-profile.jpg"
          maxSteps={maxSteps}
        />
        <LeaderboardItem
          name="Meghan Jes..."
          steps={23000}
          profilePic="/path-to-meghan-profile.jpg"
          maxSteps={maxSteps}
        />
      </div>
      <div className="h-[3px] w-[296px] bg-[#6F6F6F] bg-opacity-35"></div>
    </div>
  )
}

export default StepUpChallenge
