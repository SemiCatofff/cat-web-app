import profile from '../../assets/images/prof.png'
import styles from '../../styles/style'
import crown from '../../assets/images/crown.png'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getLeaderboard } from '../../utils/ApiCalls'
import discord from '../../assets/images/dis.png'
import ig from '../../assets/images/in.png'
import tg from '../../assets/images/tg.png'
import Position from '../Position/Position'

const calculateHeight = (steps, maxSteps) => {
  const maxHeight = 250
  return Math.floor(((maxSteps - steps) / maxSteps) * maxHeight)
}
const LeaderboardItem = ({ steps, maxSteps }) => {
  const barHeight = calculateHeight(steps, maxSteps)

  return (
    <div className="flex flex-col w-[50%] justify-end items-center gap-[20px]">
      <div
        className="bottom-0 rounded-t-xl w-[70px] bg-[#E1F076]"
        style={{ height: `${250}px` }}
      >
        <div
          className=" bottom-0 rounded-t-xl w-[70px] bg-[#6F6F6F]"
          style={{ height: `${barHeight}px` }}
        ></div>
      </div>
    </div>
  )
}

const Competitor = ({ profileSrc, name, steps, isWinner, hval, index }) => (
  <div className="w-[43%] h-full flex flex-col items-center relative gap-[15px]">
    {isWinner && (
      <span className={`${styles.buttoncta2} !text-[#202117] mb-[6px]`}>
        Winner
      </span>
    )}

    <div className="">
      {isWinner && (
        <div className="absolute top-[24px] left-[38%]">
          <img src={crown} alt=""></img>
        </div>
      )}
      <img
        className={`w-[${hval}px] h-[${hval}px] border-4 border-[#E1F076] rounded-full z-10`}
        src={profileSrc}
        alt={`${name}`}
      />

      <div
        className={`absolute ${'bottom-11'} h-[28px] w-[28px] left-[40%] rounded-full bg-[#E1F076] flex items-center justify-center`}
      >
        <div className={`${styles.subtext} !text-black font-semibold`}>
          {index}
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center z-20">
      <span className={`${styles.subheading} !text-[#202117]`}>{name}</span>
      <span className={`${styles.subtext} !text-[#202117]`}>{steps} Steps</span>
    </div>

    {/* {isWinner && <div className="h-[5px]"> </div>} */}
  </div>
)

const StepUpChallenge = ({ target, winner, type, isActive,ends }) => {
  const navigate = useNavigate()
  const params = useParams()
  const [leaderBoard, setLeaderBoard] = useState([])

  const fetchLeaderboard = async () => {
    const output = await getLeaderboard(params.id)
    if (output.success) {
      setLeaderBoard(output.data)
    }
  }

  useEffect(() => {
    fetchLeaderboard()
  }, [])

  return (
    <div className="flex flex-col mx-4 mt-4 items-center justify-center">
      <div className="flex items-end w-[90%] mt-1">
        {leaderBoard.length >= 1 && <Competitor
          isWinner={false}
          name={leaderBoard[0].username}
          steps={leaderBoard[0].value}
          profileSrc={leaderBoard[0].profilePicture}
          hval={80}
          index={1}
        />}
        <div className="w-[14%] h-[100px] flex justify-center">
          <div className={`${styles.buttoncta2} !text-[#202117]`}>v/s </div>
        </div>
        {leaderBoard.length === 2 &&<Competitor
          isWinner={false}
          name={leaderBoard[1].username}
          steps={leaderBoard[1].value}
          profileSrc={leaderBoard[1].profilePicture}
          hval={80}
          index={2}
        />}
      </div>

      <div className="flex gap-[14%] w-[90%] mt-4">
        {leaderBoard.map((item) => {
          return (
            <div className="w-[45%] flex flex-col items-center justify-end">
              <LeaderboardItem steps={item.value} maxSteps={target} />
            </div>
          )
        })}
      </div>
      <div className="h-[3px] w-[296px] bg-[#6F6F6F] bg-opacity-35"></div>
      <div className="flex flex-col items-center justify-center mt-[20px] gap-[10px]">
      { !isActive?
       <>
        <div className={`${styles.subtext} !text-[#202117] !font-regular`}>
           Challenge Ends in
        </div>
        <div className={`${styles.heading2} !text-[#202117]`}>
           {ends}
        </div>
        </> 
        :
   <>
        <div className={`${styles.subtext} !text-[#202117] !font-regular`}>
          You won 2000 credits!
        </div>
        <div
          className={`${styles.heading2} !text-[16px] flex items-center justify-center h-[68px] w-[217px] bg-[#202117] !text-[#E1F076] rounded-[80px] `}
          onClick={() => {
            navigate('/dashboard')
          }}
        >
          CLAIM
        </div>
        </> 

}
      </div>

      <div className="relative w-full h-[85px] mx-4 my-6 rounded-box bg-[#192126] flex items-center justify-center gap-[7%]">
        <div
          className="absolute inset-0 bg-trophy bg-right bg-no-repeat right-3"
          style={{ opacity: '80%' }}
        ></div>
        <div
          className={`${styles.heading2} !text-[16px] flex items-center justify-center`}
        >
          {' '}
          Share
        </div>
        <img src={ig} alt=""></img>
        <img src={tg} alt=""></img>
        <img src={discord} alt=""></img>
        {/* <img src={discord} alt=""></img> */}
      </div>
    </div>
  )
}

export default StepUpChallenge
