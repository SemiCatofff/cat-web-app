import { useSelector } from 'react-redux'
import Login from '../Login/Login'
import Navbar from '../../components/Navbar/Navbar'
import Appbar from '../../components/Appbar/Appbar'
import { useLocation } from 'react-router-dom'
import el1 from '../../assets/images/el1.png'
import el2 from '../../assets/images/el2.png'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLoginState } from '../../redux/actions/actions'
import Fetchdetails from '../FetchDetails/FetchDetails'

function Main(props) {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  const location = useLocation()
  const routes = ['/', '/create', '/dashboard', '/settings', '/chat']
  const dispatch = useDispatch()

  useEffect(() => {
    const authToken = sessionStorage.getItem('authToken')
    if (authToken && location.pathname !== '/explore') {
      dispatch(setLoginState(true))
    }
  }, [dispatch])

  const showAppbar = routes.includes(location.pathname)
  
  return (
    <div className="w-screen h-screen flex flex-col justify-between bg-[#F8F8F8] overflow-hidden relative md:max-w-[360px]">
      {isLoggedIn ? (
        <>
          <div className="z-1">
            <Navbar />
          </div>
          <div className="flex-grow overflow-auto h-[auto] z-10 px-2">
            {props.children}
          </div>
          <div className="absolute right-0 top-[5px]">
            <img src={el2} alt=""></img>
          </div>
          <div className="absolute rigth-0 bottom-[5px]">
            <img src={el1} alt=""></img>
          </div>
          {showAppbar && (
            <div className="z-20">
              <Appbar />
            </div>
          )}{' '}
        </>
      ) : (
        <div className="h-screen">
          {location.pathname === '/explore' ? <Fetchdetails /> : <Login />}
        </div>
      )}
    </div>
  )
}

export default Main
