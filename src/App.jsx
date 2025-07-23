import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login/Login';
import ArticleDetail from './pages/articledetail/ArticleDetail';
import ForgetPassword from './pages/forgetpassword/ForgetPassword';
import SignUp from './pages/signup/SignUp';
import Panel from './pages/panel/Panel';
import PWAInstallPrompt from './components/PWAInstallPrompt/PWAInstallPrompt';

const App = () => {
  return (
    <Router basename='/net4all/'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/panel" element={<Panel />} />
        {/* مسیرهای دیگه */}
      </Routes>

          <PWAInstallPrompt />
    </Router>
  );
};

export default App;