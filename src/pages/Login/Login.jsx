import { useDispatch, useSelector } from 'react-redux'


function Login() {
  const dispatch = useDispatch()

  const handleLogin = () => {
    window.location.href = 'http://localhost:3005/googleAuth/'
  }

  return (
    <div className="w-[100%] h-[100%] flex justify-center">
      <div
        className="relative top-[65%] w-[298px] h-[68px] z-10 bg-[#E1F076] rounded-[100px] cursor-pointer"
        onClick={handleLogin}
      ></div>
    </div>
  )
}

export default Login
