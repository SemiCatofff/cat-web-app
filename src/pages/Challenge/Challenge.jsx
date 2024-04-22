import styles from '../../styles/style'
import { useState, useEffect } from 'react'
import Progress from '../../components/Progress/Progress'
import StepUpChallenge from '../../components/Leaderboard/Leaderboard'
import MultiChallenge from '../../components/MultiChallenge/MultiChallenge'
import Chatbox from '../../components/Chatbox/Chatbox'
import DareLeader from '../../components/DareLeader/DareLeader'
import { useParams } from 'react-router-dom'
import {
  getChallengeDashboard,
  getOngoingChallenges,
  getLeaderboard,
} from '../../utils/ApiCalls'
import moment from 'moment'

function Challenge() {
  const [tab, setTab] = useState(0)
  const [gameType, setGameType] = useState(localStorage.getItem('type'))
  const params = useParams()
  const [challenges, setChallenges] = useState([])
  const [amount, setAmount] = useState(0)
  const [userPerformance, setUserPerformance] = useState({
    Target: '1',
    Value: '0',
    StakedWager: '00',
    TotalWagerStaked: '000',
  })
  const [voting, setVoting ] = useState("voting")
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

  const [leaderBoard, setLeaderBoard] = useState([])

  const fetchLeaderboard = async () => {
    const output = await getLeaderboard(params.id)
    if (output.success) {
      setLeaderBoard(output.data)
    }
  }
  useEffect(()=>{
    fetchLeaderboard()
    getDashboardDetails()
  },[])

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchLeaderboard()
      getDashboardDetails() 
    }, 10000); 
    return () => clearTimeout(timer);
  }, [userPerformance, leaderBoard]);



  return (
    <div className="flex flex-col h-auto">
      <div className="mx-4 my-2 ">
        <div className={`${styles.caption2} !text-[#4B4B4B]`}>
          #{userPerformance.GameType}
        </div>
        <div className={`${styles.heading1} !text-[#202117] !font-semibold `}>
          {userPerformance.ChallengeName}
        </div>
        <div>
          <span className={`${styles.caption2} !text-[#202117] !font-medium`}>
            {moment(parseInt(userPerformance.StartDate)).format("Do of MMMM, YYYY")} {moment(parseInt(userPerformance.StartDate)).format("h:mm a")}
          </span>
         {!moment(parseInt(userPerformance.EndDate)).isBefore(moment())? <span className={`${styles.paragraph} !text-[#8D8D8D] ml-2`}>
            {'Ending in '}
            {moment
              .duration(
                moment(parseInt(userPerformance.EndDate)).diff(moment())
              )
              .humanize()}
          </span>: <span className={`${styles.paragraph} !text-[#8D8D8D] ml-2`}>
            {'Ended '}
            {moment
              .duration(
                moment(parseInt(userPerformance.EndDate)).diff(moment())
              )
              .humanize()} {' ago '}
          </span> }
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
          value={userPerformance.Value > userPerformance.Target? userPerformance.Target : userPerformance.Value}
          target={userPerformance.Target}
          wager={userPerformance.StakedWager}
          prize={userPerformance.TotalWagerStaked}
          // type={userPerformance.GameType}
          type={voting}
          game={gameType}
          item={challenges}
          leaderBoard={leaderBoard} // Pass leaderBoard as prop
          creator={userPerformance.ChallengeCreatorUsername}
          creatorImg={userPerformance.ChallengeCreatorImage}
          joined ={setUserPerformance.PlayersJoined}
          setTab={setTab}
        />
      )}

      {tab === 1 &&
        ((gameType === 'nvn' && (
          <MultiChallenge
            target={userPerformance.Target}
            type={userPerformance.GameType}
            isActive={moment(parseInt(userPerformance.EndDate)).isBefore(moment())}
            ends={moment
              .duration(
                moment(parseInt(userPerformance.EndDate)).diff(moment())
              )
              .humanize()}
            leaderBoard={leaderBoard}
            winner ={moment(parseInt(userPerformance.EndDate)).isBefore(moment())?userPerformance.ChallengeWinner:""}
          />
        )) ||
          (gameType === '1v1' && (
            <StepUpChallenge
              target={userPerformance.Target}
              type={userPerformance.GameType}
              isActive={moment(parseInt(userPerformance.EndDate)).isBefore(moment())}
              ends={moment
                .duration(
                  moment(parseInt(userPerformance.EndDate)).diff(moment())
                )
                .humanize()}
              leaderBoard={leaderBoard}
              winner ={moment(parseInt(userPerformance.EndDate)).isBefore(moment())?userPerformance.ChallengeWinner:""}
            />
          )) ||
          (gameType === '0v1' && (
            <DareLeader
              target={userPerformance.Target}
              type={userPerformance.GameType}
              isActive={moment(parseInt(userPerformance.EndDate)).isBefore(moment())}
              ends={moment
                .duration(
                  moment(parseInt(userPerformance.EndDate)).diff(moment())
                )
                .humanize()}
              leaderBoard={leaderBoard}
              creator={userPerformance.ChallengeCreatorUsername}
              creatorImg={userPerformance.ChallengeCreatorImage}
              winner ={moment(parseInt(userPerformance.EndDate)).isBefore(moment())?userPerformance.ChallengeWinner:""}
            />
          )))}

      {tab === 2 && <Chatbox />}
    </div>
  )
}

export default Challenge
