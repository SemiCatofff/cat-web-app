import { useDispatch } from "react-redux";
import { setWalletAddress, setLoginState } from "../../redux/actions/actions";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import './Login.scss'
import { loginAPI, setUserDetailsAPI} from "../../utils/ApiCalls";
import { useEffect } from "react";
import base58 from 'bs58'
require("@solana/wallet-adapter-react-ui/styles.css");



function Login() {
  const dispatch = useDispatch();
  const { publicKey, connected,signMessage } = useWallet();

  useEffect(()=>{
    dispatch(setWalletAddress(publicKey));
    console.log(publicKey?.toBase58())

    if(connected){
    login()
    }

  },[connected,publicKey])

  async function sign(messageToSign) {
    try {
      const message = new TextEncoder().encode(messageToSign);
      const uint8arraySignature = await signMessage(message);

      return(base58.encode(uint8arraySignature));


    } catch (e) {
      console.log('could not sign message');
      return null;
    }

  }

  const login = async()=>{
    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImlhdCI6MTcwOTcyMTcwOSwiZXhwIjoxNzA5NzI1MzA5fQ.y4Y7HKpjM7L8UDXmDN_Ekv1qLiaZ3GpCR7CyaAHanJk

    const signature = await sign("hello world")
    console.log(signature)
    const output = await loginAPI(signature, publicKey);
  
    if(output.success)
    {
    localStorage.setItem("bearerToken", output.data.token )
    console.log(output.data.token)
    console.log(output)
    dispatch(setLoginState(true));
    }
  }

  return (
    <div className="login-box">
      <WalletMultiButton />
    </div>
  );
}

export default Login;
