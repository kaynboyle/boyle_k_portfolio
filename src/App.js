import React, { useState } from "react";
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const[pages] = useState([
    {
      name: 'Portfolio',
      description: 'Projects I completed or contributed to',
    },
    { name: 'Resume', description: 'Experience, skills and background' },
   
  ])
  const [contactSelected, setContactSelected] = useState(false);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <main>
      {!contactSelected ? (
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
    </div>
  );
}
