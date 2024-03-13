import { setLoginState } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { loginAPI } from "../../utils/OktoApiCalls";
import axios from "axios";

import { useGoogleLogin } from "@react-oauth/google";

function Login() {
  const dispatch = useDispatch();
  const handleLogin = async () => {
    const output = await loginAPI();
  };

  

 
  

  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      console.log(tokenResponse);
      // fetching userinfo can be done on the client or the server
      // const GoogleAuth = window.gapi.auth2.getAuthInstance();
      // console.log("=================================================");
      // const googleUser = await GoogleAuth.signIn();
      // console.log('Token || ' + googleUser.getAuthResponse().id_token);
      const userInfo = await axios
        .get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then(res => res.data);

      console.log(userInfo);
    },
    // flow: 'implicit', // implicit is the default
  });




  return (
    <div className="w-1/2 h-1/2 flex justify-center items-center">
      <div
        className="w-32 h-10 bg-blue-500 flex justify-center items-center cursor-pointer rounded-lg"
        onClick={()=>{ handleLogin();}}
      >
        Login
      </div>
    </div>
  );
}

export default Login;
