import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import AllChallenges from "./pages/AllChallenges/AllChallenges";
import Dashboard from "./pages/Dashboard/Dashboard";
import Main from "./pages/Main/Main";


function App() {
  return (
    <Provider store={store}>
    <Router>
    <Main>
        <Routes>
          <Route path="/" element={<AllChallenges />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explore" element={<AllChallenges/>} />
        </Routes>
    </Main>
      
    </Router>
  </Provider>
  );
}

export default App;
