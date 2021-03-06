import { useContext } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from 'react-router-dom'
import { AuthContext } from './context/AuthContext'
import './App.css'
import 'animate.css'
import Auth from './pages/auth/Auth'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Notifications from './pages/notifications/Notifications'
import SingleTweet from './pages/singletweet/SingleTweet'

function App() {
  const [authState] = useContext<any>(AuthContext)
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={authState.user ? <Home /> : <Auth />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/singletweet/:tweetId" element={<SingleTweet />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
