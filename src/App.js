import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header'; 
import Main from './components/Main';
import Resume from './components/Resume';
import NameOverlay from './components/NameOverlay';

const App = () => {
  const [allData, setAllData] = useState({ resume: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let rafId;
    
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      
      rafId = requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        
        const fadeStart = windowHeight * 0.0;
        const fadeEnd = windowHeight * 0.4;
        
        if (scrollPosition <= fadeStart) {
          setOpacity(1);
        } else if (scrollPosition >= fadeEnd) {
          setOpacity(0);
        } else {
          setOpacity(1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await fetch("/allData.json");
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setAllData(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, []); 

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="App">
      <Header />
      <section className="firstPage-container">
        <NameOverlay opacity={opacity} />
      </section>

      <section className='second-page'>
        <Main />
        <Resume data={allData.resume} />
      </section>
    </div>
  );
};

export default App;