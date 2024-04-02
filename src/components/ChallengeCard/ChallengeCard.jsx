import { cardImg, optionBtn, award, avatargrp} from '../../assets/images'
import card2 from "../../assets/images/card2.png"
import styles from '../../styles/style'
import { useNavigate } from 'react-router'

const ChallengeCard = ({ id, name, date, people, wager, prize, type, active }) => {
  const navigate = useNavigate()
  const handleOnclick = () => {
    if(active){
      navigate(`/challenge/${id}`)
    }
    else{
      navigate(`/details/${id}`)
    } 
  }


  return (
    <>
      <div className="relative w-full cursor-pointer" onClick={handleOnclick}>
        <img src={type=== "Steps"? cardImg : card2} alt="" className="w-full h-[400px]" />
        <div className={``}>
          <div className={`absolute top-10 w-full px-8`}>
            <div className={`${styles.flexBetween}`}>
              <div
                className={`${styles.caption2} !text-black bg-transparent py-2 my-auto rounded-xl text-center px-2 flex`}
              >
                <img src={avatargrp} alt="" />+ {people} members
              </div>
              <div className="rounded px-3 py-4  transparent-bg my-auto">
                <img src={optionBtn} alt="" />
              </div>
            </div>
          </div>
          <div className={`absolute bottom-10 w-full px-8 `}>
            <div className={`${styles.flexBetween}`}>
              <div
                className={`${styles.caption1} ${styles.marginY} !text-[#B5B5B5]`}
              >
                #{type}
                <br />
                <span className={`${styles.heading2} `}>{name}</span>
                <br />
                <div className="flex">
                  {date}
                  <div className="w-2 h-2 mx-2 rounded-full bg-yellow my-auto" />
                  <div className={`text-white italic`}>
                    Entry : {wager} credits
                  </div>
                </div>
                <div className="px-3 bg-white rounded-full py-2 mx-auto mt-4 flex">
                  <div className="flex">
                    <img src={award} alt="gg" />
                    <p
                      className={`${styles.heading2} !text-black !text-[12px] mx-1`}
                    >
                      Prize Pool{' '}
                      <span className="text-purple-600 font-bold">
                        : {prize} Credits
                      </span>
                    </p>
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
