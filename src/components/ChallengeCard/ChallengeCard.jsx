import { cardImg, optionBtn, award, avatargrp, } from '../../assets/images'
import styles from '../../styles/style'
import { useNavigate } from 'react-router'

const ChallengeCard = () => {
  const navigate = useNavigate()
  const handleOnclick = () => {
    navigate('/details')
  }
  return (
    <>
      <div
        className="relative w-full cursor-pointer"
        onClick={handleOnclick}
      >
        <img src={cardImg} alt="" className="w-full" />
        <div className={``}>
          <div className={`absolute top-10 w-full px-8`}>
          <div className={`${styles.flexBetween}`}>
          <div
                className={`${styles.caption2} !text-black transparent-bg  py-2 my-auto rounded-xl text-center px-2 flex`}
              >
                <img src={avatargrp} alt="" />
                + 54 members
              </div>
             <div className="rounded px-3 py-4  transparent-bg my-auto">
              <img src={optionBtn} alt="" />
             </div>
            </div>
          </div>
          <div className={`absolute bottom-10 w-full px-8 `}>
            <div className={`${styles.flexBetween}`}>
              <div
                className={`${styles.caption1} ${styles.marginY} text-gray-400`}
              >
                #Fitness
                <br />
                <span className={`${styles.heading2}`}>Step Challenge</span>
                <br />
              <div className="flex">  17th April , 2024 
              <div className='w-2 h-2 mx-2 rounded-full bg-yellow my-auto' />
              <div className={`text-white italic`}>Entry : 2000 credits</div>
              </div>
              <div className="pl-3 bg-white rounded-full py-2 mx-auto mt-4 flex">
                <div className="flex"><img src={award} alt="gg"  />
                <p className={`${styles.heading2} !text-black !text-[12px] mx-1`}>Prize Pool <span className='text-purple-600 font-bold'>: 20K Credits</span></p>
                </div>
                
              </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChallengeCard
