import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import store from './redux/store/store'
import { Provider } from 'react-redux'
import { Challenge,Dashboard, Home,  Main,  Chat,} from './pages'
import ChallengeDetails from './pages/ChallengeDetails/ChallengeDetails'
import CreateChallenge from './pages/CreateChallenge/CreateChallenge'

function App() {
  return (
      <Provider store={store}>
        <Router>
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/details/:id" element={<Challenge />} />
              <Route path="/challenge/:id" element={<ChallengeDetails />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/create" element={<CreateChallenge />} />
            </Routes>
          </Main>
        </Router>
      </Provider>
  )
}

export default App
