import axios from "axios";
const BackendURL = "https://api.catoff.xyz";

const loginAPI = async (signature, publicKey) => {
  let body = {
    signature: signature,
    message: "hello world",
    publicKey: publicKey,
  };
  try {
    const response = await axios.post(`${BackendURL}/user/login`, body);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

const setUserDetailsAPI = async () => {
  let headers = {
    Authorization: `Bearer ${localStorage.getItem("bearerToken")}`,
  };
  let body = {
    Email: "ishita@gmail.com",
    UserName: "ishita",
  };
  try {
    const response = await axios.post(
      `${BackendURL}/user/addUserDetails`,
      body,
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

const searchChallengeApi = async (searchTerm) => {
  let headers = {
    Authorization: `Bearer ${localStorage.getItem("bearerToken")}`,
  };
  try {
    const response = await axios.get(
      `${BackendURL}/challenge/challenges/search/calory?searchTerm=${searchTerm}`,
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

const getDashboardDetailsAPI = async () => {
  let headers = {
    Authorization: `Bearer ${localStorage.getItem("bearerToken")}`,
  };
  let body = {
    Email: "ishita@gmail.com",
    UserName: "ishita",
  };
  try {
    const response = await axios.post(
      `${BackendURL}/user/addUserDetails`,
      body,
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

const getUserCurrentTableAPI = async () => {
  let headers = {
    Authorization: `Bearer ${localStorage.getItem("bearerToken")}`,
  };

  try {
    const response = await axios.get(
      `${BackendURL}/userBoard/dashboard/userCurrentTable`,
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

const getUserGraphAPI = async (time) => {
  let headers = {
    Authorization: `Bearer ${localStorage.getItem("bearerToken")}`,
  };

  try {
    const response = await axios.get(
      `${BackendURL}/userBoard/dashboard/userProgressGraph/${time}`,
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};
const getUserProfileDataAPI = async () => {
  let headers = {
    Authorization: `Bearer ${localStorage.getItem("bearerToken")}`,
  };

  try {
    const response = await axios.get(
      `${BackendURL}/userBoard/dashboard/userDetails`,
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export {
  loginAPI,
  setUserDetailsAPI,
  searchChallengeApi,
  getUserCurrentTableAPI,
  getUserGraphAPI,
  getUserProfileDataAPI,
  getDashboardDetailsAPI,
};
