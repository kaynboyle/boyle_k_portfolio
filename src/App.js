import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import './App.css';

export default function App() {

  return (
    <div>
      <Nav/>
      <main>
        <ContactForm/>
        {/* <About/>
        <Portfolio/>
        <Resume/> */}
      </main>
    </div>
  );
}
