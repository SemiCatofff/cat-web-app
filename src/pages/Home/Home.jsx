import styles from '../../styles/style'
import { homeHeader, filter, search } from '../../assets/images'
import { ChallengeCard } from '../../components'
import { useEffect, useState } from 'react'
import { getOngoingChallenges, getUserChallenges } from '../../utils/ApiCalls'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Home = () => {
  const [challenges, setChallenges] = useState([
    {
      PlayersJoined: 1,
      ChallengeID: '1',
      ChallengeName: 'Solo Tournament',
      StartDate: '2024-04-01',
      Wager: 10,
    },
    {
      PlayersJoined: 1,
      ChallengeID: '2',
      ChallengeName: 'Solo Tournament',
      StartDate: '2024-04-01',
      Wager: 10,
    },
    {
      PlayersJoined: 1,
      ChallengeID: '3',
      ChallengeName: 'Solo Tournament',
      StartDate: '2024-04-01',
      Wager: 10,
    },
  ])

  const [active, setActive] = useState([])

  const getChalData = async (filter) => {
    const output = await getOngoingChallenges(filter, 1, 10)
    if (output.success) {
      setChallenges(output.data)
    }
  }

  const userChallenges = async ()=>{
    const output = await getUserChallenges()
      const activeChallenges = output.map((item)=> item.ChallengeID)
      setActive(activeChallenges)
  }

  useEffect(() => {
    getChalData('all')
    userChallenges()
  }, [])

  return (
    <>
      <div className={`${styles.marginX} ${styles.marginY} flex `}>
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="pp"
          className="rounded-full object-cover mr-3 w-12 h-12"
        />
        <div>
          <p className={`${styles.heading2} !text-black`}>
            Hey <span className="!text-purple-600">Alice!</span>
          </p>
          <p>Let's the game Begin ! 🔥</p>
        </div>
      </div>
      <div className={`search-box flex ${styles.marginX}`}>
        <div className="w-[90%]">
          <input
            type="text"
            className=' bg-no-repeat bg-left-center bg-[length:20px_20px] bg-[url("search)] pl-6  w-full h-12 bg-violet-100 rounded-xl shadow'
            placeholder="Search for challenges..."
          />
        </div>
        <button className="w-[10%] ml-2 h-12 bg-violet-100 rounded-xl shadow flex justify-center my-auto">
          <img src={filter} alt="filter" className="my-auto" />
        </button>
      </div>
      {/* Cards Section */}
      <div className={`card-box`}>
        {challenges.map((item) => {
          return (

             !item.IsStarted &&
            <ChallengeCard
              id={item.ChallengeID}
              type={item.GameType}
              name={item.ChallengeName}
              people={item.PlayersJoined}
              date={item.StartDate}
              wager={item.Wager}
              prize={item.CurrentPool}
              active= {active.includes(item.ChallengeID)}
            />
          )
        })}
      </div>
      {/* Create Challenge CTA */}
      <div className={` ${styles.paddingX} ${styles.paddingY} mb-40`}>
        <div className="relative">
          <img src={homeHeader} alt="headerImg" className="w-full" />{' '}
          <h1
            className={`${styles.heading2} ${styles.marginX} ${styles.marginY} absolute top-2 text-yellow `}
          >
            Create Challenge and Own Your Win !
          </h1>
          <p
            className={`${styles.paragraph} ${styles.marginX}  absolute bottom-14 `}
          >
            Compete and earn crypto with Catoff.
          </p>
          <div
            className={`${styles.caption2} mx-3 ${styles.paddingX} transparent-bg  py-2 my-auto rounded-xl text-center px-2 flex absolute bottom-4 `}
          >
            Create Now
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
