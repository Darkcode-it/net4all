import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  return (
    <Router basename='/net4all/'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* مسیرهای دیگه */}
      </Routes>
    </Router>
  );
};

export default App;