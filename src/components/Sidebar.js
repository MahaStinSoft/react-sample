import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar bg-dark">
      <div className="sidebar-header text-white">
        <h3>Dashboard</h3>
      </div>
      <ul className="list-unstyled">
        <li><Link to="/" className="text-white">Dashboard</Link></li>
        <li><Link to="/profile" className="text-white">Profile</Link></li>
        <li><Link to="/settings" className="text-white">Settings</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
