import React from 'react';
import { Route, Routes } from 'react-router-dom';  
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import HomePage from '../pages/HomePage';
import About from '../pages/AboutPage';
import Contact from '../pages/Contact';
import Loans from '../pages/LoanPage';
import Login from '../components/LoginForm';

const RoutesComponent = () => {
  return (
    <Routes> 
      <Route path="/" element={<HomePage />} /> 
      <Route path="/about" element={<About />} />
      <Route path="/loans" element={<Loans />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />  
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default RoutesComponent;
