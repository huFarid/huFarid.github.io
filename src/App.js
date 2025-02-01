import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header'; 
import Main from './components/Main';
import Resume from './components/Resume';
import NameOverlay from './components/NameOverlay';
import useFetchData from "./hooks/useFetchData";
import useScrollOpacity from "./hooks/useScrollOpacity";

const App = () => {

const opacity = useScrollOpacity();
const {data:allData,isLoading, error } = useFetchData("/allData.json");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="App">
      <Header />
      <section className="firstPage-container" id="home">
        <div >
        <NameOverlay opacity={opacity} />

        </div>
      </section>

      <section className='second-page' >
        
        <div id="about">
        <Main />
        </div>
        <div id="resume">
        <Resume data={allData.resume} />
        </div>
      </section>
    </div>
  );
};

export default App;