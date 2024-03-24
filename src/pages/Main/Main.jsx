import { useSelector } from 'react-redux'
import Login from '../Login/Login'
import Navbar from '../../components/Navbar/Navbar'
import Appbar from '../../components/Appbar/Appbar'

function Main(props) {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  return (
    <div className="w-screen h-screen flex flex-col justify-between relative bg-[#ECECEC] md:max-w-[360px]">
      <div className="z-20 h-[56px]">
        <Navbar />
      </div>

      <div className="flex-grow overflow-auto z-10 h-auto">
        {props.children}
      </div>

      <div className="z-20">
        <Appbar />
      </div>

      <div
        className="absolute inset-0 bg-hero bg-cover bg-center"
        style={{ opacity: 0.16 }}
      ></div>
    </div>
  )
}

export default Main
