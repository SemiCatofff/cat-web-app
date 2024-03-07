import Header from "../../components/Navbar/Navbar";
import "./Main.scss";
import { useSelector, useDispatch } from "react-redux";
import Login from "../Login/Login";

function Main(props) {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div className="main-page">
   
          <Header />
          <div className="page-section">
            <div className="info-section"></div>
            <div className="lower-section">{props.children}</div>
          </div>
    </div>
  );
}

export default Main;
