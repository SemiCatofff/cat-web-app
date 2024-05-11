import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { Challenge, Dashboard, Home, Main, Chat, GeneralVote, VotingFeed } from './pages';
import ChallengeDetails from './pages/ChallengeDetails/ChallengeDetails';
import CreateChallenge from './pages/CreateChallenge/CreateChallenge';
import React, { useEffect } from 'react'; 
import ReactGA from 'react-ga4'; // Update the import to use react-ga4

const TRACKING_ID = "G-9LE41PT8PM";
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    // Update the page view tracking method for react-ga4
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
  }, []);

  return (
      <Provider store={store}>
        <Router>
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/details/:id" element={<Challenge />} />
              <Route path="/challenge/:id" element={<ChallengeDetails />} />
              <Route path="/vote/:id" element={<VotingFeed />} />
              <Route path="/feed" element={<GeneralVote />} />
              <Route path="/chat" element={<Chat/>} />
              <Route path="/create" element={<CreateChallenge />} />
            </Routes>
          </Main>
        </Router>
      </Provider>
  );
}

export default App;
