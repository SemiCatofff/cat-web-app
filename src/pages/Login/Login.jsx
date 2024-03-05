import { useSelector, useDispatch } from "react-redux";
import { setWalletAddress, setLoginState } from "../../redux/actions/actions";
function Login() {
  const walletAddress = useSelector((state) => state.user.walletAddress);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  const updateWalletAddress = () => {
    dispatch(setWalletAddress("xyz"));
    console.log(isLoggedIn);
    dispatch(setLoginState(!isLoggedIn));
  };

  return <div></div>;
}

export default Login;
