import React, { useEffect, useRef } from 'react'
import menu from '../../assets/images/Menu.svg'
import bell from '../../assets/images/notif.png'
import set from '../../assets/images/sett.png'

const Navbar = () => {
  const buttonContainerRef = useRef(null)
  const overlayRef = useRef(null)
  const bodyRef = useRef(null)

  useEffect(() => {
    const buttonContainer = buttonContainerRef.current
    const overlay = overlayRef.current
    const body = bodyRef.current

    const toggleClass = () => {
      buttonContainer?.classList.toggle('active')
      overlay?.classList.toggle('open')
      body?.classList.toggle('active')
    }

    buttonContainer?.addEventListener('click', toggleClass)

    return () => {
      buttonContainer?.removeEventListener('click', toggleClass)
    }
  }, [])

  return (
    <>
      <div className="w-full px-2 py-2">
        <div className="flex justify-between items-center ">
          <a href="/" className=" z-40">
            <img src={''} alt="Logo" className="w-full" />
          </a>
          <div className="flex justify-between items-center ">
            <div
              id="menuToggle z-10"
              className="flex justify-center items-center"
            >
              <div ref={buttonContainerRef}></div>

              <div ref={overlayRef} class="overlay mt-0">
                <div class="nav">
                  <div className="flex justify-end px-4 w-full text-white">
                    <div className="col2 text-right">
                      {' '}
                      <ul>
                        <div className="nav-para text-2xl mb-4 mt-4">
                          <a className="lala  relative " href="/anarchy">
                            Explore
                          </a>
                        </div>
                        <div className="nav-para text-2xl mb-4 mt-4">
                          <a className="lala  relative " href="/anarchy">
                            Create Challenge
                          </a>
                        </div>
                        <div className="nav-para text-2xl mb-4 mt-4">
                          <a className="lala  relative " href="/anarchy">
                            Join Challenge
                          </a>
                        </div>
                        <div className="nav-para text-2xl mb-4 mt-4">
                          <a className="lala  relative " href="/anarchy">
                            My Profile
                          </a>
                        </div>
                        <div className="nav-para text-2xl mb-4 mt-4">
                          <a className="lala  relative " href="/anarchy">
                            Invite Friend
                          </a>
                        </div>
                      </ul>
                    </div>
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
