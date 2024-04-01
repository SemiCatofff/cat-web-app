import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import store from './redux/store/store'
import { Provider } from 'react-redux'
import {
  Challenge,
  CreateChallenge,
  Dashboard,
  Home,
  Main,
  Chat,
  Fetchdetails,
} from './pages'

import ChallengeDetails from './pages/ChallengeDetails/ChallengeDetails'

import { GoogleOAuthProvider } from '@react-oauth/google'

function App() {
  return (
    <GoogleOAuthProvider clientId="719827239908-s7sm3g1a0bavuus0fq039l8b73qvc6bq.apps.googleusercontent.com">
      <Provider store={store}>
        <Router>
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/create" element={<CreateChallenge />} />
              <Route path="/challenge/:id" element={<Challenge />} />
              <Route path="/details/:id" element={<ChallengeDetails />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/explore" element={<Fetchdetails />} />

              {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
          </Main>
        </Router>
      </Provider>
    </GoogleOAuthProvider>
  )
}

export default App

// {
//   "code": "4/0AeaYSHC_LUBD7DbIottsXXJYiDGFeogYEZm3zciA8Deu0rkUJTOFqhDJ0SsTo7fw7I8XuQ",
//   "scope": "email profile openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
//   "authuser": "0",
//   "prompt": "consent"
// }
