import React from 'react'
import profile from '../../assets/images/prof.png'
import styles from '../../styles/style'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import crown from '../../assets/images/crown.png'
import { useNavigate } from 'react-router-dom'
import discord from '../../assets/images/dis.png'
import ig from '../../assets/images/in.png'
import tg from '../../assets/images/tg.png'
import { getLeaderboard } from '../../utils/ApiCalls'


const Competitor = ({ profileSrc, name, steps, isWinner, hval, index, leaderboard }) => (
  <div className="w-[43%] h-full flex flex-col items-center relative gap-[15px]">
    <div className="">
      {isWinner && (
        <div className="absolute -top-[22px] left-[36%]">
          <img src={crown} alt=""></img>
        </div>
      )}
      <img
        className={`w-[${hval}px] h-[${hval}px] border-4 border-[#E1F076] rounded-full z-10`}
        src={profileSrc}
        alt={`${name}`}
      />
      <div
        className={`absolute ${index === 1 ? 'bottom-16' : 'bottom-11'} h-[28px] w-[28px] left-[39.5%] rounded-full bg-[#E1F076] flex items-center justify-center`}
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

    {index === 1 && <div className="h-[5px]"> </div>}
  </div>
)

const PlayerInfo = ({ index, name, steps, prof }) => {
  return (
    <div className="h-[48px] bg-[#FFFFFF] rounded-[12px] px-4 flex items-center justify-center">
      <div className={`${styles.subheading} !text-[#4f4f4f]`}>{index + 4}</div>
      <div>
        <img
          className="w-[30px] h-[30px] rounded-full mx-[10px]"
          src={prof}
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

const MultiChallenge = ({ target, type, isActive, ends, leaderBoard, winner }) => {
  const [people, setPeople] = useState(leaderBoard || []);

  const params = useParams()
  const fetchLeaderboard = async () => {
    const output = await getLeaderboard(params.id)
    if (output.success) {
      setPeople(output.data)
    }
  }

  useEffect(() => {
    fetchLeaderboard()
  }, [])
  const navigate = useNavigate()

  return (
    <div className="flex flex-col mx-4 mt-4 items-center justify-center">
      <div className="flex items-end w-[90%] mt-6">
        {people.length >= 3
          ? [people[1], people[0], ...people.slice(2, 3)].map(
              (person, index) => (
                <Competitor
                  key={index}
                  isWinner={index === 0 && winner === person.username}
                  name={person.username}
                  steps={person.value}
                  hval={70}
                  index={index === 0 ? 2 : index === 2 ? 3 : index}
                  profileSrc={person.profilePicture}
                />
              )
            )
          : people.map((person, index) => (
              <Competitor
                key={index}
                isWinner={index === 0 && winner === person.username}
                name={person.username}
                steps={person.value}
                hval={70}
                index={index + 1}
                profileSrc={person.profilePicture}
              />
            ))}
      </div>

      <div className="w-full flex flex-col gap-[8px] mt-4">
        {people.length > 3 &&
          people.slice(3).map((item, index) => {
            return (
              <PlayerInfo
                index={index}
                name={item.username}
                address={item.address}
                steps={item.value}
                prof= {item.profilePicture}
              />
            )
          })}
      </div>

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

export default MultiChallenge
