import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/loginPage';
import Signup from './components/signUpPage'; // Import the Signup component
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the Login page */}
        <Route path="/" element={<Login />} />
        
        {/* Route for the Signup page */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;