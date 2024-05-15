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
import { refreshServer } from '../../utils/ApiCalls'

function Main(props) {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  const isPopupOpen = useSelector((state) => state.user.isPopup)
  const location = useLocation()
  const routes = ['/', '/create', '/dashboard', '/settings', '/chat']
  const approutes = ['/vote', '/feed']
  const dispatch = useDispatch()

 

  useEffect(() => {
    const refreshTokenExpiry = localStorage.getItem("refreshTokenExpiry");
    if (new Date() < new Date(refreshTokenExpiry)) {
      console.log(refreshTokenExpiry)
      console.log(new Date())
      dispatch(setLoginState(true));
    }
    else{
      console.log("here")
    }
  }, []);

  const authTok = async () => {
    const output = await refreshServer();
    const now = new Date();
    const accessTokenExpiry = new Date(now.getTime() + 4 * 60 * 1000); // 4 minutes
    const refreshTokenExpiry = new Date(now.getTime() + 80 * 24 * 60 * 60 * 1000); // 80 days
    localStorage.setItem("authToken", output.data.access_token);
    localStorage.setItem("authTokenExpiry", accessTokenExpiry.toISOString());
    localStorage.setItem("refreshToken", output.data.refresh_token);
    localStorage.setItem("refreshTokenExpiry", refreshTokenExpiry.toISOString());
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      authTok();
      console.log("refreshing the tokens");
    }, 4 * 60 * 1000); 
    return () => clearInterval(interval);
  }, []);  

  useEffect(() => {
  
      dispatch(setPopupState(false))
  }, [window.location.pathname])

  const showAppbar = routes.includes(location.pathname)
  const showNav = approutes.some(route => location.pathname.startsWith(route));
  
  return (
    <div className="w-screen h-safe flex flex-col justify-between bg-[#F8F8F8] overflow-hidden relative md:max-w-[360px]">
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
