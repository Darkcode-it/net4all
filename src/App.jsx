import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login/Login';
import ArticleDetail from './pages/articledetail/ArticleDetail';
import ForgetPassword from './pages/forgetpassword/ForgetPassword';
import SignUp from './pages/signup/SignUp';

const App = () => {
  return (
    <Router basename='/net4all/'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/signup" element={<SignUp />} />
        {/* مسیرهای دیگه */}
      </Routes>
    </Router>
  );
};

export default App;