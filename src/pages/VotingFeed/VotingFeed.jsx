import React, { useEffect, useState } from 'react'
import styles from '../../styles/style'
import { VoteCard } from '../../components'


const VotingFeed = () =>{


    return(
        <>
         <div className="h-[300px] w-full bg-[#8915D0] rounded-b-[30px] relative"> 
         <div className="absolute bottom-[25%] w-full px-8">
        <div className={styles.flexBetween}>
          <div
            className={`${styles.caption1} ${styles.marginY} !text-[#B5B5B5]`}
          >
            <span className={`${styles.heading2} !text-[20px]`}>Digital Art Challenge</span>
            <div className="flex gap-[10px] mt-3">
            <div className="bg-white rounded-full py-1.5 px-1 w-[60%] flex justify-center">
              <div className="flex ">
               
                <p className={`${styles.heading2} !text-[#696969] !text-[10px]`}>
                 Creator Mary Jane
                
                </p>
              </div>
            </div>
            <div className="bg-black rounded-full py-1.5 w-[40%] flex justify-center">
              <div className="flex">
               
                <p className={`${styles.heading2} !text-[10px]`}>
                 8 hours left
                </p>
              </div>
            </div>
            </div>
            <div className={`${styles.subheading} !text-[10px] mt-2`}>
              This is the challenge details area
           
            </div>
         
          </div>
        </div>
      </div>
          </div>

         
         <VoteCard/>
        <VoteCard/>
            
       
        {/* <ChallengeCard/> */}
        
       
        </>



        
    )
}

export default VotingFeed