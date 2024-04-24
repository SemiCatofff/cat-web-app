import card2 from '../../assets/images/img.png'
import styles from '../../styles/style'
import { useState } from 'react'
import share from '../../assets/images/shareic.png'

const VoteCard = ({ name, img, time, id, isChecked, trigger }) => {
  const handleCheckboxChange = () => {
    trigger(id)
  }

  return (
    <div className="mx-4 my-5  border-[#E2DBFF] border-[1px] bg-[#F6EEF6]  rounded-[12px] px-4 flex flex-col">
      <div className="w-full h-[60px] flex items-center relative">
        <img src={card2} className="w-[30px] h-[30px] rounded-[50%] " alt="" />
        <div
          className={`${styles.subheading} !text-[#000000] mx-2 font-regular !text-[12px] flex items-center h-full`}
        >
          {' '}
          Name{' '}
        </div>
        <div
          className={`${styles.subheading} !text-[#000000] font-regular !text-[12px] flex items-center h-[7px] w-[7px] rounded-[50%] bg-[#939393]`}
        >
          {' '}
        </div>
        <div
          className={`${styles.subheading} !text-[#6B6B6B] mx-2 font-regular !text-[9px] flex items-center h-full w-[50%]`}
        >
          {' '}
          Posted few days ago{' '}
        </div>
        {/* <div className={`${styles.subheading} !font-bold !text-[10px] flex items-center px-3 py-1 bg-[#4A484B] rounded-[20px] justify-center`} >
          <img src={tick} className='h-[22px] mr-[1px] mt-[2px]'></img> <span className='mr-1'>Verified</span> </div> */}
        
        <div className='w-[20%] flex justify-end'><input 
          type="checkbox" 
          id={`checkbox-${id}`} 
          className="hidden" 
          checked={isChecked}
          onChange={handleCheckboxChange} 
        />
        <label
          htmlFor={`checkbox-${id}`}
          className={`w-6 h-6 rounded-full flex justify-center items-center cursor-pointer ${
            isChecked ? 'bg-[#05945B] border-[#ffffff]' : 'bg-gray-100 border-2 border-gray-300'
          }`}
        >
          <svg
            className={`w-4 h-4 text-white pointer-events-none ${
              isChecked ? 'block' : 'hidden'
            }`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </label> </div>
      </div>
      <div>
        <img src={card2} className="w-full rounded-[20px]" />
      </div>
      <div className="w-full h-[58px] flex items-center">
        <div className=" h-[48px] flex items-center w-full">
          <div
            className={`${styles.heading2} !text-[#000000] mx-2 flex items-center h-full !text-[14px] w-[89%]`}
          >
            {' '}
            Quantity : 100 KG{' '}
          </div>
          <img src={share} alt=""></img>
        </div>
      </div>
    </div>
  )
}

export default VoteCard
