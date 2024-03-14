import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import AllChallenges from "./pages/AllChallenges/AllChallenges";
import Dashboard from "./pages/Dashboard/Dashboard";
import Main from "./pages/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import CreateChallenges from "./pages/CreateChallenge/CreateChallenge";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId="719827239908-s7sm3g1a0bavuus0fq039l8b73qvc6bq.apps.googleusercontent.com">
      <Provider store={store}>
        <Router>
          <Main>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/create" element={<CreateChallenges />} />
              <Route path="/explore" element={<AllChallenges />} />
            </Routes>
            <Navbar />
          </Main>
        </Router>
      </Provider>
    </GoogleOAuthProvider>
  );
}

export default App;

// {
//   "code": "4/0AeaYSHC_LUBD7DbIottsXXJYiDGFeogYEZm3zciA8Deu0rkUJTOFqhDJ0SsTo7fw7I8XuQ",
//   "scope": "email profile openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
//   "authuser": "0",
//   "prompt": "consent"
// }
