import styles from '../../styles/style'
import { useState, useEffect } from 'react'
import Progress from '../../components/Progress/Progress'
import StepUpChallenge from '../../components/Leaderboard/Leaderboard'
import MultiChallenge from '../../components/MultiChallenge/MultiChallenge'
import Chatbox from '../../components/Chatbox/Chatbox'
import DareLeader from '../../components/DareLeader/DareLeader'
import { useParams } from 'react-router-dom'
import { getChallengeDashboard, getOngoingChallenges } from '../../utils/ApiCalls'
import moment from 'moment'

function Challenge() {
  const [tab, setTab] = useState(0)
  const [gameType, setGameType] = useState(localStorage.getItem('type'))
  const params = useParams()
  const [challenges, setChallenges] = useState([])
  const [userPerformance, setUserPerformance] = useState({
    Target: '1',
    Value: '0',
    StakedWager: '00',
    TotalWagerStaked: '000',
  })
  const getDashboardDetails = async () => {
    const output = await getChallengeDashboard(params.id)
    if (output.success) {
      setUserPerformance(output.data)
    }
    const output2 = await getOngoingChallenges('all', 1, 10)
    if (output2.success) {
      setChallenges(output2.data)
    }
  }



  useEffect(() => {
    getDashboardDetails()
  }, [])

  return (
    <div className="flex flex-col h-auto">
      <div className="mx-4 my-2 ">
        <div className={`${styles.caption2} !text-[#4B4B4B]`}>#{userPerformance.GameType}</div>
        <div className={`${styles.heading1} !text-[#202117] !font-semibold `}>
          {userPerformance.ChallengeName}
        </div>
        <div>
          <span className={`${styles.caption2} !text-[#202117] !font-medium`}>
            14th April, 2024
          </span>
          <span className={`${styles.paragraph} !text-[#8D8D8D]`}>
            {'  '}Ending in {moment
                .duration(
                  moment(parseInt(userPerformance.EndDate)).diff(moment())
                )
                .humanize()}
          </span>
        </div>
      </div>
      <div className="h-[54px] mx-4 flex bg-[#EDEBF3] rounded-tab drop-shadow gap-[1%]">
        <div
          className={`h-[54px] rounded-tab w-[49%] flex items-center justify-center ${
            tab === 0 ? 'bg-[#E1F076]' : ''
          }`}
          onClick={() => {
            setTab(0)
          }}
        >
          <div
            className={`${styles.caption1} ${tab === 0 ? '!text-[#202117]' : '!text-[#6F6F6F]'}`}
          >
            My Progress
          </div>
        </div>
        <div
          className={`h-[38p] rounded-tab w-[49%] flex items-center justify-center ${
            tab === 1 ? 'bg-[#E1F076] !text-[#202117]' : '!text-[#6F6F6F]'
          }`}
          onClick={() => {
            setTab(1)
          }}
        >
          <div
            className={`${styles.caption1} ${tab === 1 ? '!text-[#202117]' : '!text-[#6F6F6F]'}`}
          >
            {' '}
            Leaderboard
          </div>
        </div>
        <div
          className={`h-[38p] rounded-tab w-[49%] flex items-center justify-center ${
            tab === 2 ? 'bg-[#E1F076]' : ''
          }`}
          onClick={() => {
            setTab(2)
          }}
        >
          <div
            className={`${styles.caption1} ${tab === 2 ? '!text-[#202117]' : '!text-[#6F6F6F]'}`}
          >
            {' '}
            Chatroom
          </div>
        </div>
      </div>

      {tab === 0 && (
        <Progress
          value={userPerformance.Value}
          target={userPerformance.Target}
          wager={userPerformance.StakedWager}
          prize={userPerformance.TotalWagerStaked}
          type={userPerformance.GameType}
          game= {gameType}
          item = {challenges}
        />
      )}

      {tab === 1 &&
        ((gameType === 'nvn' && (
          <MultiChallenge
            target={userPerformance.Target}
            type={userPerformance.GameType}
            isActive ={userPerformance.isStarted}
            ends ={moment
              .duration(
                moment(parseInt(userPerformance.EndDate)).diff(moment())
              )
              .humanize()}
          />
        )) ||
          (gameType === '1v1' && (
            <StepUpChallenge
              target={userPerformance.Target}
              type={userPerformance.GameType}
              isActive ={userPerformance.isStarted}
              ends ={moment
                .duration(
                  moment(parseInt(userPerformance.EndDate)).diff(moment())
                )
                .humanize()}
            />
          )) ||
          (gameType === '0v1' && (
            <DareLeader
              target={userPerformance.Target}
              type={userPerformance.GameType}
              isActive ={userPerformance.isStarted}
              ends ={moment
                .duration(
                  moment(parseInt(userPerformance.EndDate)).diff(moment())
                )
                .humanize()}
            />
          )))}

      {tab === 2 && <Chatbox />}
    </div>
  )
}

export default Challenge
