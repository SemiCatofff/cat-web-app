import { useSelector } from "react-redux";
import Login from "../Login/Login";
import Navbar from "../../components/Navbar/Navbar";

function Main(props) {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="flex flex-col md:max-w-[350px] w-full h-full bg-white shadow-lg">
        <div className="overflow-auto">{props.children}</div>
      </div>
      <Navbar />
    </div>
  );
}

export default Main;
