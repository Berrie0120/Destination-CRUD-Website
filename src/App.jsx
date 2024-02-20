import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Home from './HomePage/Home.jsx';
import Resume from './ResumePage/Resume';

function App() {
    return(
      <Router>
      <Header />

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>

      <Footer />
    </Router>
    );
}

export default App
