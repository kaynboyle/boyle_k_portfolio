import React, { useState } from "react";
import Nav from './components/Nav';
import About from './components/About/About';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  const[pages] = useState([
Resume, Portfolio])
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(true);
  const [currentPage, setCurrentPage] = useState({About});

  return (
    //base url 
    <Router>
      
    <div>
      <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        setAboutSelected={aboutSelected}
      />
      <Routes>
        <Route exact path="/" element={<About/>} />
        <Route exact path="/ContactForm" element={<ContactForm/>} />
        <Route exact path="/Portfolio" element={<Portfolio/>} />
        <Route exact path="/Resume" element={<Resume/>} />
      </Routes>
      <Footer/>
    </div>

    </Router>
  );
}
