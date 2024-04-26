import React, { useEffect, useState } from 'react'
import styles from '../../styles/style'
import { VoteCard } from '../../components'
import tick from '../../assets/images/tck.png'
import back from '../../assets/images/back.png'
import food from '../../assets/images/food.png'
import { useNavigate, useParams } from 'react-router-dom'
import clock from '../../assets/images/clock.png'
import { getChallengeDashboard } from '../../utils/ApiCalls'

const VotingFeed = () => {
  const [submits, setSubmits] = useState([
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ])

  const [userPerformance, setUserPerformance] = useState({ChallengeName : localStorage.getItem('ChallengeName')})

  const [validates, setValidates] = useState([])
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    const ids = submits.map((submit) => submit.id)
    setValidates(ids)
  }, [])

  const updateValidates = (id) => {
    if (validates.includes(id)) {
      setValidates(validates.filter((validId) => validId !== id)) // Remove id
    } else {
      setValidates([...validates, id]) // Add id
    }
    //console.log(validates)
  }

  const handleValidate = () => {
    console.log(validates)
  }

  const getDashboardDetails = async () => {
    const output = await getChallengeDashboard(params.id)
    if (output.success) {
      setUserPerformance(output.data)
      localStorage.setItem("ChallengeName", output.data.ChallengeName)
    }}

  useEffect(()=>{
  getDashboardDetails()
  },[])
  return (
    <>
      <div className="h-[300px] w-full bg-gradient-to-b from-[#7C61EA] to-[#8915D0] rounded-b-[30px] relative">
        <img src={back} alt="" className="absolute top-[12px] left-[12px]" onClick={()=>{navigate(`/details/${params.id}`)}}></img>
        <img
          src={food}
          className="absolute top-[0px] right-[0px] h-[68%]"
          alt=""
        ></img>
        <div className="absolute bottom-[3%] w-full px-4">
          <div className={styles.flexBetween}>
            <div
              className={`${styles.caption1} ${styles.marginY} !text-[#B5B5B5] `}
            >
              <div className={`${styles.heading2} !text-[20px] w-[50%]`}>
                {userPerformance.ChallengeName}
              </div>
              <div className="flex gap-[10px] mt-3">
                <div className="bg-white rounded-full py-1.5 px-1 w-[40%] flex justify-center">
                  <div className="flex ">
                    <img alt="" src={userPerformance.ChallengeCreatorImage} className='w-[15px] h-[15px] rounded-[50%] mr-[5px]'></img>
                    <p
                      className={`${styles.heading2} !text-[#696969] !text-[10px] mt-[2px]`}
                    >
                      Creator {userPerformance.ChallengeCreatorUsername}
                    </p>
                  </div>
                </div>
                <div className="bg-black rounded-full py-1 w-[25%] flex justify-center mt-[1px]">
                <img src={clock} className='w-[10px] h-[10px] mt-[5px] mr-[4px] alt=""'></img>
                  <div className="flex">
                   
                    <p className={`${styles.heading2} !text-[10px] mt-[3px]`}>
                      8 hrs left
                    </p>
                  </div>
                </div>
              </div>
              <div className={`${styles.subheading} !text-[10px] mt-2`}>
              {userPerformance.ChallengeDescription?.substring(0,115) + "..."}
              </div>
              <div className={`${styles.subheading} !text-[10px] mt-2 cursor-pointer` } onClick={()=>{navigate(`/details/${params.id}`)}}>
                View Challenge
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="86"
                  height="2"
                  viewBox="0 0 86 2"
                  fill="none"
                >
                  <path d="M-0.00292969 1H86" stroke="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {localStorage.getItem("name") === userPerformance.ChallengeCreatorUsername && <div className="h-[47px] mt-3 rounded-[100px] bg-[#EDEBF3] mx-3 flex">
        <div className="w-[60%] flex items-center">
          <img src={tick} className="h-[42px] mx-1 mt-1"></img>
          <div
            className={`${styles.heading2} !text-[11px] !text-black flex items-center h-full ml-1`}
          >
            {' '}
            Verify all entries{' '}
          </div>
        </div>
        <div className="w-[40%] bg-[#202117] rounded-[100px] flex items-center justify-center">
          <div
            className={`${styles.heading2} !text-[14px] flex items-center h-full cursor-pointer`}
            onClick={handleValidate}
          >
            {' '}
            Submit{' '}
          </div>
        </div>
      </div>}

      {submits.map((item) => {
        return (
          <VoteCard
            key={item.id}
            name={item.name}
            img={item.img}
            time={item.time}
            id={item.id}
            isChecked={validates.includes(item.id)}
            trigger={updateValidates}
            isCreator ={localStorage.getItem("name") === userPerformance.ChallengeCreatorUsername}
          />
        )
      })}
    </>
  )
}

export default VotingFeed
