import React, { useState } from 'react'
import { notif, set, cross } from '../../assets/images'
import styles from '../../styles/style'

const Navbar = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen)
  }

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
              {/* Overlay */}
              <div className={`overlay mt-0 ${isOverlayOpen ? 'open' : ''}`}>
                <div className="nav">
                  <div
                    className={`px-4 w-full flex flex-col !text-black ${styles.heading2}`}
                  >
                    <a className="mx-auto mt-6" href="/">
                      Explore
                    </a>
                    <a className="mx-auto mt-6" href="/">
                      Explore
                    </a>
                    <a className="mx-auto mt-6" href="/">
                      Explore
                    </a>
                    <a className="mx-auto mt-6" href="/">
                      Explore
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
