import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/signup';
import OtpVerification from './pages/otpverification';
import SignIn from './pages/signin';
import Voting from './pages/voting';
import Home from './pages/home';
import LiveResult from './pages/liveresult';
import Election from './pages/election';
import Aspirant from './pages/aspirant';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otpverification" element={<OtpVerification />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/voting" element={<Voting />} />
          <Route path="/home" element={<Home />} />
          <Route path="/liveresult" element={<LiveResult />} />
          <Route path="/election" element={<Election />} />
          <Route path="/aspirant" element={<Aspirant />} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;