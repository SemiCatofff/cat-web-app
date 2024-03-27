import React from 'react'
import styles from '../../styles/style'
import { homeHeader, arrow, award2, star, user, edit,addd, yellowarrow } from '../../assets/images'

const Dashboard = () => {
  return (
    <>
      <div className={`${styles.paddingX}`}>
        <div className="relative">
       
          <div className="w-full absolute z-20 flex justify-center">
         
            <div className="flex-col">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-full w-20 h-20 object-cover mx-auto mt-10"
              />
               <div className="absolute z-40 right-4 -mt-4">
              <img src={edit} alt=""  />
            </div>
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

      <div className={`${styles.marginX} ${styles.marginY}  bg-white rounded-xl shadow`}>
        <div
          className={`flex justify-between  ${styles.paddingX} ${styles.paddingY} py-8 `}
        >  
            <div className={`${styles.caption1} !text-black px-4 py-2 rounded-full bg-purple-100 flex relative`}><span><img src={star} alt="" className='' /></span> <span className='my-auto mr-1'> Total </span>  <span className='font-bold my-auto'>300,000</span> <span className='absolute -right-3 top-2'><img src={addd} className='w-5'/></span></div>
            <div className={`${styles.caption1} !text-black px-4 py-2 rounded-full bg-purple-100 `}>Wagered <span className='font-bold'>20,000</span></div>
          </div>

        <div className="mx-4 pb-2">
          <img src={award2} alt="awardicon" className='mx-auto' />
        <div className="button rounded-full bg-purple-100 pl-6 mb-4 -mt-3.5">
    <h1 className={`${styles.heading2} !text-black flex justify-between`}> <span className='my-auto px-1 flex flex-col'><p className={`${styles.caption2} !text-black`}>Wager Earned</p><p>12,470</p></span> <span className='-mr-2 bg-black text-yellow rounded-full px-8 py-4 flex'>WITHDRAW <img src={yellowarrow} alt="" /></span>  </h1>
  </div>
        </div>
         
      </div>


{/* history Title */}
      <div className={` ${styles.paddingX} ${styles.flexBetween}`}>
        <p className={`${styles.subheading} !text-black`}>History</p>
        <a href="" className={`${styles.paragraph} !text-black`}>
          View All
        </a>
      </div>

{/* History */}
      <div className={`${styles.paddingX} ${styles.marginY}`}>
        <div
          className={`flex justify-between bg-white rounded-xl ${styles.paddingX} px-6 ${styles.paddingY} py-4 shadow`}
        >
          <div className="flex">
            <div className="w-12 h-12 rounded-full bg-[#FFF5D9] text-center">
              <p className={`${styles.subheading} !text-black my-3.5`}>1</p>
            </div>
            <div className="texts ml-4 my-auto">
              <p className={`${styles.subheading2} !text-black`}>
                Step Up Challenge
              </p>
              <p className={`${styles.caption2} !text-gray-500`}>
                24th January 2024
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="texts ml-4 my-auto">
              <p className={`${styles.subheading2} !text-amber-400`}>- 2 SOL</p>
              <p className={`${styles.caption1} !text-gray-500`}>Unranked</p>
            </div>
          </div>
        </div>
      </div>
{/* Buttons */} 
<div className={`${styles.paddingX} ${styles.marginY} mb-40`}>
<div className="button rounded-full bg-yellow px-8 py-4 my-auto mb-4">
    <h1 className={`${styles.heading2} !text-black flex justify-center`}>  <span className='mr-2 '><img src={user} alt="" className='h-5 w-5 my-auto' /></span> <span className='my-auto'>INVITE YOUR FRIEND</span> </h1>
  </div>
  <div className="button rounded-full bg-black px-8 py-4 my-auto mb-4">
    <h1 className={`${styles.heading2}  flex justify-center`}> <span className='my-auto'>LOGOUT </span> <span className='-mr-2 '><img src={arrow} alt="" className='h-8 w-8 my-auto' /></span> </h1>
  </div>
</div>


    </>
  )
}

export default Dashboard
