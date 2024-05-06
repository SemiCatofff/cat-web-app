import styles from '../../styles/style'
import { homeHeader, filter } from '../../assets/images'
import { ChallengeCard } from '../../components'
import { useEffect, useState } from 'react'
import { getOngoingChallenges, getUserDetails,searchChallengeAPI,} from '../../utils/ApiCalls'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [challenges, setChallenges] = useState([])
  const [userInfo, setUserInfo] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isFilterVisible, setIsFilterVisible] = useState(false)
  const [currentFilter, setCurrentFilter] = useState('All')
  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible)
  }
  const navigate = useNavigate()
  const type = ["Steps","Calorie","DigitalProof","Validator"]
  const getChalData = async (filter) => {
    const output = await getOngoingChallenges(filter)
    if (output.success) {
      setChallenges(output.data)
    }
  }

  const userData = async () => {
    const output = await getUserDetails()
    if(output.success){
      setUserInfo(output.data)
      localStorage.setItem('name', output.data.UserName)
      localStorage.setItem('profile', output.data.ProfilePicture)

    }
  }
  const handleSearch = async () => {
    const output = await searchChallengeAPI(searchTerm, 1, 10)
    if (output.success) {
      setChallenges(output.data)
    } else {
      alert('No challenges found with that')
    }
  }

  const handleFilterChange = (filterType, index) => {
    setCurrentFilter(filterType)
    //console.log(index)
    let body ={}
    if(index === 1){
      body = {"participationType": "0v1", "status":"UPCOMING"}
    }else if(index === 2){
      body = {"participationType": "1v1", "status":"UPCOMING"}
    }
    else{
      body = {"status" : "UPCOMING"}
    }
    getChalData(body)
  }

  useEffect(() => {
    userData()
    getChalData({status : "UPCOMING"})
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
                const output = await getChalData({searchTerm: e.target.value, status:"upcoming"}
                )
              } else {
                getChalData({status:"UPCOMING"})
              }
            }}
          />
        </div>
        <button
          className="ml-2 w-12 h-12 bg-violet-100 rounded-xl shadow flex justify-center my-auto"
          onClick={toggleFilter}
        >
          <img src={filter} alt="filter" className="my-auto" />
        </button>
      </div>
      {isFilterVisible && (
        <div
          className={`flex space-x-2 overflow-x-auto scrollbar-hide ${styles.marginX} mt-4`}
        >
          <p
            className={`${styles.subheading2} mr-2 !text-gray-500 my-auto whitespace-nowrap`}
          >
            Challenge Type
          </p>
          {['All', 'Dares', 'Peer to Peer'].map((filterType,index) => (
            <button
              key={filterType}
              className={`${styles.caption1} ${
                currentFilter === filterType ? 'bg-violet-200' : 'bg-violet-100'
              } shadow-sm  !text-stone-700 px-6 py-1 rounded-full whitespace-nowrap`}
              onClick={() => handleFilterChange(filterType,index)}
            >
              {filterType}
            </button>
          ))}
        </div>
      )}

      <div className={`card-box`}>
        {challenges.map((item) => {
          return (
            
              <ChallengeCard
                id={item.ChallengeID}
                type={type[item.Game.GameType]}
                name={item.ChallengeName}
                people={item.Players.length}
                date={moment(parseInt(item.StartDate, 10)).format(
                  'D MMM, YYYY HH.mm'
                )}
                wager={item.Wager}
                prize={item.Wager * item.Players.length}
              />
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
            onClick={() => {
              navigate('/create')
            }}
          >
            Create Now
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
