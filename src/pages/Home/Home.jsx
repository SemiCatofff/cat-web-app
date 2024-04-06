import styles from '../../styles/style'
import { homeHeader, filter, search } from '../../assets/images'
import { ChallengeCard } from '../../components'
import { useEffect, useState } from 'react'
import {
  getOngoingChallenges,
  getUserChallenges,
  getUserDetails,
  searchChallengeAPI,
} from '../../utils/ApiCalls'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [challenges, setChallenges] = useState([])
  const [userInfo, setUserInfo] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const getChalData = async (filter) => {
    const output = await getOngoingChallenges(filter, 1, 10)
    if (output.success) {
      setChallenges(output.data)
    }
  }
  const userData = async () => {
    const output = await getUserDetails()
    setUserInfo(output)
    localStorage.setItem('profile', output.ProfilePicture)
  }
  const handleSearch = async () => {
    const output = await searchChallengeAPI(searchTerm, 1, 10)
    if (output.success) {
      setChallenges(output.data)
    } else {
      alert('No challenges found with that')
    }
  }

  useEffect(() => {
    userData()
    getChalData('all')
  }, [])

  return (
    <>
      <div
        className={`${styles.marginX} ${styles.marginY} flex `}
        onClick={() => {
          navigate('/dashboard')
        }}
      >
        <img
          src={userInfo.ProfilePicture}
          alt="pp"
          className="rounded-full object-cover mr-3 w-12 h-12"
        />
        <div>
          <p className={`${styles.heading2} !text-black`}>
            Hey <span className="!text-purple">{userInfo.UserName}!</span>
          </p>
          <p>Let's the game Begin ! 🔥</p>
        </div>
      </div>
      <div className={`search-box flex ${styles.marginX}`}>
        <div className="w-[90%]">
          <input
            type="text"
            className="bg-no-repeat bg-left-center bg-[length:20px_20px] pl-6 w-full h-12 bg-violet-100 rounded-xl shadow"
            placeholder="Search for challenges..."
            value={searchTerm}
            onChange={async (e) => {
              setSearchTerm(e.target.value)
              if (e.target.value.trim() !== '') {
                const output = await searchChallengeAPI(
                  e.target.value.trim(),
                  1,
                  10
                )
                if (output.success) {
                  setChallenges(output.data)
                } else {
                  alert('No challenges found with that')
                }
              } else {
                getChalData('all')
              }
            }}
          />
        </div>
        <button
          className="ml-2 w-12 h-12 bg-violet-100 rounded-xl shadow flex justify-center my-auto"
          onClick={handleSearch}
        >
          <img src={filter} alt="filter" className="my-auto" />
        </button>
      </div>

      <div className={`card-box`}>
        {challenges.map((item) => {
          return (
            item.IsStarted && (
              <ChallengeCard
                id={item.ChallengeID}
                type={item.GameType}
                name={item.ChallengeName}
                people={item.PlayerJoined}
                date={moment(parseInt(item.StartDate, 10)).format(
                  'D MMM, YYYY HH.mm'
                )}
                wager={item.Wager}
                prize={item.CurrentPool}
              />
            )
          )
        })}
      </div>

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
