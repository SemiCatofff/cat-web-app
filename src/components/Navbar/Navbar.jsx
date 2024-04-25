import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { getUserDetails } from '../../utils/ApiCalls'
import { set, cross, arrowChevron } from '../../assets/images'
import styles from '../../styles/style'


const Navbar = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen)
  }

  const [userInfo, setUserInfo] = useState([])
  const navigate = useNavigate()

  const userData = async () => {
    const output = await getUserDetails()
    if(output.success){
      setUserInfo(output)
      localStorage.setItem('profile', output.ProfilePicture)

    }
  }

  useEffect(() => {
    userData()
  }, [])

  const navigateAndCloseOverlay = (path) => {
    navigate(path)
    toggleOverlay()
  }

  return (
    <>
      <div className="w-full">
        <div
          className={`${styles.flexBetween} ${styles.paddingX} mt-6 mb-2 items-center`}
        >
          <Link
            to="/"
            className={`z-50 ${styles.heading2} !text-black`}
          >
            CATOFF
          </Link>
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
                    className={`${styles.marginX} bg-white rounded-xl px-4 py-3 shadow flex justify-between `}
                    onClick={() => navigateAndCloseOverlay('/dashboard')}
                  >
                    <div className="flex">
                      {' '}
                      <img
                        src={userInfo.ProfilePicture}
                        alt="pp"
                        className="rounded-full object-cover mr-3 w-12 h-12"
                      />
                      <div>
                        <p className={`${styles.heading2} !text-black mt-1 `}>
                          Hey{' '}
                          <span className="!text-purple">
                            {userInfo.UserName}!
                          </span>
                        </p>
                        <p>Go to Dashboard</p>
                      </div>{' '}
                    </div>
                    <img src={arrowChevron} alt="gg" />
                  </div>
                  <div
                    className={`px-4 w-full flex flex-col !text-black ${styles.heading2}`}
                  >
                    <Link
                      className="mx-auto mt-6"
                      to="/"
                      onClick={toggleOverlay}
                    >
                      Explore Challenge
                    </Link>
                    <Link
                      className="mx-auto mt-6"
                      to="/create"
                      onClick={toggleOverlay}
                    >
                      Create Challenge
                    </Link>
                    <Link
                      className="mx-auto mt-6"
                      to="/dashboard"
                      onClick={toggleOverlay}
                    >
                      Ongoing Challenges
                    </Link>
                    <Link
                      className="mx-auto mt-6"
                      to="/contact"
                      onClick={toggleOverlay}
                    >
                      Contact Us
                    </Link>
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
