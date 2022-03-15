import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './pages/landingPage/LandingPage';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;