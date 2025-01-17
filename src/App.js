import React from 'react';
import './App.css';
import Header from './components/Header'; // Assuming you already have a Header component
import Main from './components/Main';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer'
import Profile from './components/Profile';

function App() {
  return (
    <div >
     <Header />
      <section className="firstPage-container">
      
      </section>

      <section className='second-page'>
     
      <Main />
      <Projects/>
      
      </section>

      <section  className='third-page'>
          <Skills/>

      </section>

    </div>

  
  );
}

export default App;
