import { useSelector, useDispatch } from "react-redux";
import Login from "../Login/Login";

function Main(props) {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div className="main-page">
      {/* {isLoggedIn ? (
        <> */}
        
          <div className="w-screen h-screen flex align-center justify-center">
            <div className="w-screen h-screen flex align-center justify-center"></div>
            {props.children}
          </div>
        {/* </>
      ) : (
        <>
          <Login />
        </> */}
      {/* )} */}
    </div>
  );
}

export default Main;
