import { useDispatch } from "react-redux";
import { setWalletAddress, setLoginState } from "../../redux/actions/actions";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import './Login.scss'
import { useEffect } from "react";
require("@solana/wallet-adapter-react-ui/styles.css");


function Login() {
  const dispatch = useDispatch();
  const { publicKey, connected } = useWallet();

  useEffect(()=>{
    dispatch(setWalletAddress(publicKey));
    dispatch(setLoginState(connected))
  },[connected,publicKey])

  return (
    <div className="login-box">
      <WalletMultiButton />
    </div>
  );
}

export default Login;
