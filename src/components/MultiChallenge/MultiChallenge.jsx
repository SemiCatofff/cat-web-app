import React from 'react'
import profile from '../../assets/images/prof.png'
import styles from '../../styles/style'
import { useState } from 'react'

const Competitor = ({ profileSrc, name, steps, isWinner }) => (
  <div className="w-[32%] h-full flex flex-col items-center relative gap-[15px]">
    {isWinner && (
      <span className={`${styles.buttoncta2} !text-[#202117]`}>Winner</span>
    )}
    <img
      className="w-[80px] h-[80px] border-4 border-yellow rounded-full"
      src={profile}
      alt=""
    />
    <div className="flex flex-col items-center gap-[1px]">
      <span className={`${styles.subheading} !text-[#202117]`}>{name}</span>
      <span className={`${styles.subtext} !text-[#202117] !text-[12px]`}>{steps} Steps</span>
    </div>
  </div>
)

const PlayerInfo = ({ index, name, steps }) => {
  return (
    <div className="h-[48px] bg-[#FFFFFF] rounded-[12px] px-4 flex items-center justify-center">
      <div className={`${styles.subheading} !text-[#4f4f4f]`}>{index+4}</div>
      <div>
        <img
          className="w-[32px] h-[32px] rounded-full mx-[10px]"
          src={profile}
          alt=""
        />
      </div>

      <div className="flex-1 ml-2 mr-2">
        <p className={`${styles.subheading} !text-[#4f4f4f]`}>{name}</p>
      </div>
      <div className="flex justify-center items-center rounded-full text-[10px] font-medium text-[#4f4f4f]">
        <p className={`${styles.subtext} !text-[#4f4f4f]`}>{steps} </p>
      </div>
    </div>
  )
}

const MultiChallenge = ({ live }) => {
  const [people, setPeople] = useState([
    {
      name: 'Alice Doe',
      address: '0x7856...jh86sp09',
      steps: '5 Hours Ago',
      imageSrc: '/path-to-your-image.jpg',
    },
    {
      name: 'Alice Doe',
      address: '0x7856...jh86sp09',
      steps: '15 Hours Ago',
      imageSrc: '/path-to-your-image.jpg',
    },
    {
      name: 'Alice Doe',
      address: '0x7856...jh86sp09',
      steps: '2 Days Ago',
      imageSrc: '/path-to-your-image.jpg',
    },
    {
      name: 'Alice Doe',
      address: '0x7856...jh86sp09',
      steps: '2 Days Ago',
      imageSrc: '/path-to-your-image.jpg',
    },
  ])

  return (
    <div className="flex flex-col mx-4 mt-4 items-center justify-center">
      <div className="flex items-end w-[90%] mt-6">
        <Competitor isWinner={false} name={'Megan Jess'} steps={100} />
        <Competitor isWinner={true} name={'Bryan Wolf'} steps={100} />
        <Competitor isWinner={false} name={'Bryan Wolf'} steps={100} />
      </div>

      <div className="w-full flex flex-col gap-[8px] mt-4">
        {people.map((item, index) => {
          return (
            <PlayerInfo
              index={index}
              name={item.name}
              address={item.address}
              steps={item.steps}
            />
          )
        })}
      </div>

      <div className="relative w-full h-[85px] mx-4 mt-6 rounded-box bg-[#192126] flex flex-col items-center justify-center gap-[9px]">
        <div
          className="absolute inset-0 bg-trophy bg-right bg-no-repeat right-3"
          style={{ opacity: '80%' }}
        ></div>
      </div>
    </div>
  )
}

export default MultiChallenge
