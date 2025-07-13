import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';

const App = () => {
  return (
    <Router>
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* مسیرهای دیگه */}
      </Routes>
    </Router>
  );
};

export default App;