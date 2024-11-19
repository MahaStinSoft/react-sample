import React from 'react';
import { Route, Routes } from 'react-router-dom';  // Import Routes instead of Switch
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import HomePage from '../pages/HomePage';
import About from '../pages/AboutPage';
import Blog from '../pages/BlogPage';
import Contact from '../pages/Contact';

const RoutesComponent = () => {
  return (
    <Routes>  
      <Route path="/" element={<Dashboard />} />  
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default RoutesComponent;
