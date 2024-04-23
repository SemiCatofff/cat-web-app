import React, { useEffect, useState } from 'react'
import styles from '../../styles/style'
import { VoteCard } from '../../components'

const VotingFeed = () => {
  const [submits, setSubmits] = useState([
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ])

  const [validates, setValidates] = useState([])

  useEffect(()=>{
   const ids = submits.map(submit => submit.id);
   setValidates(ids)
  },[])

  const updateValidates = (id) => {
    if (validates.includes(id)) {
      setValidates(validates.filter(validId => validId !== id)); // Remove id
    } else {
      setValidates([...validates, id]); // Add id
    }
    //console.log(validates)
  };

  const handleValidate = () =>{
    console.log(validates)
  }


  return (
    <>
      <div className="h-[300px] w-full bg-[#8915D0] rounded-b-[30px] relative">
        <div className="absolute bottom-[25%] w-full px-8">
          <div className={styles.flexBetween}>
            <div
              className={`${styles.caption1} ${styles.marginY} !text-[#B5B5B5]`}
            >
              <span className={`${styles.heading2} !text-[20px]`}>
                Digital Art Challenge
              </span>
              <div className="flex gap-[10px] mt-3">
                <div className="bg-white rounded-full py-1.5 px-1 w-[60%] flex justify-center">
                  <div className="flex ">
                    <p
                      className={`${styles.heading2} !text-[#696969] !text-[10px]`}
                    >
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

      <div className='h-[47px] mt-3 rounded-[100px] bg-[#EDEBF3] mx-3 flex'>
        <div className='w-[60%]'>
        <div className={`${styles.heading2} !text-[11px] !text-black flex items-center h-full px-2 ml-3`} > Verify all challenges </div>

        </div>
        <div className='w-[40%] bg-[#202117] rounded-[100px] flex items-center justify-center'>
        <div className={`${styles.heading2} !text-[14px] flex items-center h-full`} onClick={handleValidate} > Submit </div>
        </div>

      </div>

      {submits.map((item) => {
        return <VoteCard key={item.id} name={item.name} img={item.img} time={item.time} id={item.id} isChecked={validates.includes(item.id)} trigger={updateValidates} />
      })}
    </>
  )
}

export default VotingFeed
