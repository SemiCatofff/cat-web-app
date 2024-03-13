import { loginAPI } from "../../utils/OktoApiCalls";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setPinAPI, createWallet } from "../../utils/OktoApiCalls";

function Signup() {
  const [pin, setPin] = useState("");
  const [loading, setloading] = useState(true);

  const navigate = useNavigate();
  const handleLogin = async () => {
    setloading(true);
    const output1 = await setPinAPI(pin, localStorage.getItem("oktoToken"));
    console.log(output1);

    if (output1.status === "success") {
      localStorage.setItem("oktoAuthToken", output1.data.auth_token);
      const output2 = await createWallet();
      console.log(output2);
      navigate("/dashboard");
    }
  };

  const checkLoginStatus = async () => {
    const output = await loginAPI();
    if (output.status === "success") {
      if (output.data.action === "signup") {
        setloading(false);
        localStorage.setItem("oktoToken", output.data.token);
      } else {
        navigate("/dashboard");
      }
    }
    console.log(output);
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {!loading ? (
        <>
          <input
            type="text"
            onChange={(e) => setPin(e.target.value)}
            className="w-64 h-10 px-4 bg-gray-200 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-600"
            placeholder="Enter PIN"
          />
          <div
            className="w-32 h-10 bg-blue-500 flex justify-center items-center cursor-pointer rounded-lg"
            onClick={() => {
              handleLogin();
            }}
          >
            set pin
          </div>
        </>
      ) : (
        <div className="text-blue-600"> Loading</div>
      )}
    </div>
  );
}

export default Signup;
