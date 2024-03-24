import styles from '../../styles/style'
import { useState } from 'react'
import Progress from '../../components/Progress/Progress'
import StepUpChallenge from '../../components/Leaderboard/Leaderboard'

function Challenge() {
  const [tab, setTab] = useState(0)
  return (
    <div className="flex flex-col h-auto py-4">
      <div className="h-tab mx-4 flex bg-[#F7F7F7] rounded-tab px-2 py-2 gap-[1%]">
        <div
          className={`h-[38px] rounded-tab w-[49%] flex items-center justify-center ${
            tab === 0 ? 'bg-yellow' : ''
          }`}
          onClick={() => {
            setTab(0)
          }}
        >
          <div className={`${styles.subheading} !text-[#000000]`}>
            My Progress
          </div>
        </div>
        <div
          className={`h-[38p] rounded-tab w-[49%] flex items-center justify-center ${
            tab === 1 ? 'bg-yellow' : ''
          }`}
          onClick={() => {
            setTab(1)
          }}
        >
          <div className={`${styles.subheading} !text-[#000000]`}>
            {' '}
            Leaderboard
          </div>
        </div>
      </div>

      {tab === 0 ? <Progress /> : <StepUpChallenge />}
    </div>
  )
}

export default Challenge
