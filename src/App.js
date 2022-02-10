import React, { useState } from "react";
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const[pages] = useState([
Resume, Portfolio])
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(true);
  const [currentPage, setCurrentPage] = useState({About});

  return (
    <div>
      <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        setAboutSelected={aboutSelected}
      />
      <main>
      {!contactSelected ? (
        !aboutSelected ? 
        <>
          <Portfolio/>
        </>
        :
        <>
          <About/>
        </>
      ) : (
          <ContactForm/>
        )}
        {/* <About/>
        <Portfolio/>
        <Resume/> */}
      </main>
      <Footer/>
    </div>
  );
}
