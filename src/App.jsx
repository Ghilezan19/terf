import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    
    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  const handleRegisterSuccess = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route 
          path="/login" 
          element={
            user ? <Navigate to="/dashboard" /> : <Login onLoginSuccess={handleLoginSuccess} />
          } 
        />
        
        <Route 
          path="/register" 
          element={
            user ? <Navigate to="/dashboard" /> : <Register onRegisterSuccess={handleRegisterSuccess} />
          } 
        />
        
        <Route 
          path="/dashboard" 
          element={
            user ? <Dashboard user={user} onLogout={handleLogout} /> : <Navigate to="/login" />
          } 
        />
        
        <Route 
          path="/profile" 
          element={
            user ? <Profile user={user} /> : <Navigate to="/login" />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
