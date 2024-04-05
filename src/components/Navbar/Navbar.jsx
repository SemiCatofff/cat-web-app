import { set, cross } from '../../assets/images'
import styles from '../../styles/style'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getUserDetails } from '../../utils/ApiCalls'

const Navbar = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen)
  }

  const [userInfo, setUserInfo] = useState([])
  const navigate = useNavigate()

  const userData = async () => {
    const output = await getUserDetails()
    setUserInfo(output)
    localStorage.setItem('profile', output.ProfilePicture)
  }

  useEffect(() => {
    userData()
  }, [])

  return (
    <>
      <div className="w-full">
        <div
          className={`${styles.flexBetween} ${styles.paddingX} mt-6 mb-2 items-center`}
        >
          <a href="/" className={`z-50 ${styles.heading2} !text-black`}>
            CATOFF
          </a>
          <div className="flex justify-between items-center">
            <div
              id="menuToggle"
              className="z-40 flex justify-center items-center"
            >
              <button onClick={toggleOverlay}>
                <img
                  src={isOverlayOpen ? cross : set}
                  alt={isOverlayOpen ? 'Close' : 'Settings'}
                />
              </button>

              <div className={`overlay mt-0 ${isOverlayOpen ? 'open' : ''}`}>
                <div className="nav">
                  <div
                    className={`${styles.marginX} bg-white rounded-xl px-4  shadow flex`}
                  >
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
                        <p className={`${styles.heading2} !text-black mt-1`}>
                          Hey{' '}
                          <span className="!text-purple-600">
                            {userInfo.UserName}!
                          </span>
                        </p>
                        <p>Go to Dashboard</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`px-4 w-full flex flex-col !text-black ${styles.heading2}`}
                  >
                    <a className="mx-auto mt-6" href="/">
                      Explore Challenge
                    </a>
                    <a className="mx-auto mt-6" href="/">
                      Create Challenge
                    </a>
                    <a className="mx-auto mt-6" href="/">
                      Ongoing Challenges
                    </a>
                    <a className="mx-auto mt-6" href="/">
                      Contact Us
                    </a>
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

export default Navbar
