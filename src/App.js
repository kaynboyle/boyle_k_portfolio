import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  return (
    <div>
      
      <Nav>

      </Nav>
      <main>
        <ContactForm></ContactForm>
        <About></About>
        <Portfolio></Portfolio>
        <Resume></Resume>
      </main>
    </div>
  );
}

export default App;
