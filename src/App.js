import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header'; 
import Main from './components/Main';
import Resume from './components/Resume'

const App = () => {
  const [allData, setAllData] = useState({ resume: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Updated fetch data using fetch API instead of jQuery
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
      </section>

      <section className='second-page'>
        <Main />
        <Resume data={allData.resume} />
      </section>
    </div>
  );
};

export default App;