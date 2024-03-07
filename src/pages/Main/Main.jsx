import Header from "../../components/Navbar/Navbar";
import "./Main.scss";
import { useSelector, useDispatch } from "react-redux";
import Login from "../Login/Login";

function Main(props) {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div className="main-page">
    {isLoggedIn ? (
      <>
        <Header />
        <div className="page-section">
          <div className="info-section"></div>
          {props.children}
        </div>
      </>
    ) : (
      <>
        <Login />
      </>
    )}
  </div>
  );
}

export default Main;
