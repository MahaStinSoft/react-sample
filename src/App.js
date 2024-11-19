import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Routes from './routes/Routes';
import './styles/Global.css';
function App() {
  return (
    <Router>
      <div className="d-flex">
        <div className="content-wrapper flex-grow-1">
          <Header />
          <div className="content">
            <Routes /> 
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
