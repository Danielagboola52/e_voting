import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import all your pages
import HomePage from './pages/home';
import AspirantsPage from './pages/aspirant';
import ElectionPage from './pages/election';
import LiveResultsPage from './pages/liveresult';
import VotingPage from './pages/voting';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import OTPVerification from './pages/otpverification';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/aspirants" element={<AspirantsPage />} />
        <Route path="/election" element={<ElectionPage />} />
        <Route path="/results" element={<LiveResultsPage />} />
        <Route path="/voting" element={<VotingPage />} />
        
        {/* Auth Routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/otp-verification" element={<OTPVerification />} />
        
        {/* Redirect any unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;