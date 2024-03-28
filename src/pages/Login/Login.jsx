import { useDispatch, useSelector } from 'react-redux'
import styles from '../../styles/style'
import { setLoginState } from '../../redux/actions/actions'

function Login() {
  const dispatch = useDispatch()

  const handleLogin = async () => {
    //window.location.href = 'http://localhost:3005/googleAuth/'
    dispatch(setLoginState(true))
  }

  return (
    <div className="w-full h-full flex justify-center">
      <div className="absolute top-[60%] flex flex-col justify-center">
        <div
          className="w-[298px] h-[68px] z-1 bg-[#E1F076] rounded-[100px] cursor-pointer flex items-center justify-center"
          onClick={handleLogin}
        >
          <span className={`${styles.heading1} !text-[#202117]`}>SIGNUP</span>
        </div>

        <div className='flex flex-col items-center mt-[30px] gap-[10px]'>
        <div className= {`${styles.subtext} !text-[#FFFFFF] !font-regular`}>
           Already a user 
          </div>
          <div className= {`${styles.subtext} !text-[#E1F076]`}>
          Continue with your account
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login
