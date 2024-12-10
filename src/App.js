import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import WhyUs from './pages/WhyUs';
import Dashboard from './pages/Dashboard';
import RegisteredUsers from './components/Register/RegisteredUsers';
import Error from './pages/Error';

const AppRoutes = () => {
  const location = useLocation();

  const isAuthPage = location.pathname === '/' || location.pathname === '/register';

  return (
    <>

      {!isAuthPage && <Header />}
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<RegisteredUsers />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      
      {!isAuthPage && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
};

export default App;
