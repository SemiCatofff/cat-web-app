import { useSelector, useDispatch } from "react-redux";
import Login from "../Login/Login";
import Navbar from "../../components/Navbar/Navbar";

function Main(props) {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div className="w-screen h-screen flex align-center justify-center items-center text-white">
      {isLoggedIn ? (
        <>
          <div className="w-screen h-screen flex flex-col">
            <div className="w-full h-auto">{props.children}</div>{" "}
          </div>
          <Navbar />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Main;
