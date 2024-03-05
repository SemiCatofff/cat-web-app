import './App.css';
import Main from './pages/Main/Main';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login/Login';
import store from './redux/store/store';
import { Provider } from 'react-redux';

function App() {
  return (

    <Provider store={store}>
      <Router>
        <Main>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
        </Main>
      </Router>

      </Provider>
    );
}

export default App;
