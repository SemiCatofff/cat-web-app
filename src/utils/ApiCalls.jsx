import axios from "axios";
const BackendURL = "https://api.catoff.xyz";

const loginAPI = async (username, password) => {
  try {
    const response = await axios.post(`${BackendURL}/login`);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export { loginAPI };
