import axios from "axios";
const BackendURL = "https://sandbox-api.okto.tech";

const loginAPI = async () => {
  let body = {
    id_token: "4/0AeaYSHBcoKduHNRRzDmxM7LCsP8PI2ctGr2ZWmFqU_QTVDvgs2Nn0OskGKOsOeyQadKYTg",
  };
  try {
    const response = await axios.post(`${BackendURL}api/v1/authenticate`, body);
    return response.data;
  } catch (error) {
    return error.message;
  }
};


// {
//     "code": "4/0AeaYSHBcoKduHNRRzDmxM7LCsP8PI2ctGr2ZWmFqU_QTVDvgs2Nn0OskGKOsOeyQadKYTg",
//     "scope": "email profile openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
//     "authuser": "0",
//     "prompt": "consent"
// }


export {loginAPI}