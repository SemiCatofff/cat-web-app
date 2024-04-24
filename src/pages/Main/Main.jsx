import { useSelector } from 'react-redux'
import Login from '../Login/Login'
import Navbar from '../../components/Navbar/Navbar'
import Appbar from '../../components/Appbar/Appbar'
import { useLocation } from 'react-router-dom'
import el1 from '../../assets/images/el1.png'
import el2 from '../../assets/images/el2.png'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLoginState, setPopupState } from '../../redux/actions/actions'

function Main(props) {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  const isPopupOpen = useSelector((state) => state.user.isPopup)
  const location = useLocation()
  const routes = ['/', '/create', '/dashboard', '/settings', '/chat']
  const approutes = ['/vote', '/feed']
  const dispatch = useDispatch()

  useEffect(() => {
    const authState = sessionStorage.getItem('authProcess') === "true"
    if (authState) {
      dispatch(setLoginState(true))
    }
  }, [dispatch])
  useEffect(() => {
  
      dispatch(setPopupState(false))
  }, [window.location.pathname])

  const showAppbar = routes.includes(location.pathname)
  const showNav = approutes.some(route => location.pathname.startsWith(route));
  
  return (
    <div className="w-screen h-screen flex flex-col justify-between bg-[#F8F8F8] overflow-hidden relative md:max-w-[360px]">
      {isLoggedIn ? (
        <>
          <div className="z-1">
          {!showNav && <Navbar />}
          </div>
          <div className= {`flex-grow overflow-auto h-[auto] z-10 ${showNav?"":"px-2"}`}>
            {props.children}
          </div>
          <div className="absolute right-0 top-[5px]">
            <img src={el2} alt=""></img>
          </div>
          <div className="absolute rigth-0 bottom-[5px]">
            <img src={el1} alt=""></img>
          </div>
          {showAppbar && !isPopupOpen && (
            <div className="z-20">
              <Appbar />
            </div>
          )}{' '}
        </>
      ) : (
        <div className="h-screen">
           <Login />
        </div>
      )}
    </div>
  )
}

export default Main
