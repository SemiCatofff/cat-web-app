import { useState } from 'react'
import styles from '../../styles/style'
import { useNavigate } from 'react-router-dom'
import {ChallengeCard} from "../../components/index"
import {  avatargrp2, targetbg, target, arrow } from '../../assets/images'


function ChallengeDetails() {

  const navigate = useNavigate()
  return (
  <>
  <div className={`mb-20`}>
    <ChallengeCard />
    <div className={`${styles.marginY} ${styles.marginX}`}>
      <h1 className={`${styles.subheading2} !text-gray-500`}>About the Challenge</h1>
      <p className={`${styles.paragraph} mt-4 !text-gray-500`}>Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissi</p>
    </div>
    <div className={`${styles.marginY} ${styles.marginX}`}>
      <h1 className={`${styles.subheading2} !text-gray-500`}>Important Points</h1>
      <ul>
      <li className={`${styles.paragraph} mt-4 !text-gray-500`}>- Dorem ipsum dolor sit amet</li>
      <li className={`${styles.paragraph} mt-1 !text-gray-500`}>- Dorem ipsum dolor sit amet</li>
      <li className={`${styles.paragraph} mt-1 !text-gray-500`}>- Dorem ipsum dolor sit amet</li>
      <li className={`${styles.paragraph} mt-1 !text-gray-500`}>- Dorem ipsum dolor sit amet</li>
      </ul>
      
    </div>
    <div className={`${styles.marginY} ${styles.marginX}`}>
      <h1 className={`${styles.subheading2} !text-gray-500 mb-4`}>People Joined</h1>
    <img src={avatargrp2} alt="" />
    </div>

    <div className={`${styles.marginY} ${styles.marginX} relative`}>
    <img src={targetbg} alt="" className='w-full' />
<div className={` absolute top-4 w-full `}>
  <div className={`flex justify-between ${styles.marginX}`}><p className={`${styles.subheading}`}>Target</p>
<p className={`${styles.subheading}`}>Starts in</p></div>

</div>
<div className={` absolute bottom-4 w-full `}>
  <div className={`flex justify-between ${styles.marginX}`}>
    <p className={`${styles.heading2} text-yellow`}>10000 steps in 3 Days</p>
<p className={`${styles.heading2} !text-gray-400`}>23 Hrs</p></div>

  </div>
  
  
  </div>
  {/* Buttons */}
<div className={`${styles.marginX} flex justify-between mt-8`}>
  <div className="credit">
    <h1 className={`${styles.heading2} !text-black`}>2k Credit</h1>
    <p className={`${styles.caption1} !text-gray-500 `}>
      Wager Amount
    </p>
  </div>
  <div className="button rounded-full bg-yellow px-8 py-2 my-auto">
    <h1 className={`${styles.heading2} !text-black flex `}> <span className='my-auto'>Join Now</span> <span className='-mr-2 '><img src={arrow} alt="" className='h-8 w-8 my-auto' /></span> </h1>
  </div>
</div>
  </div>



  </>
  )
}

export default ChallengeDetails
