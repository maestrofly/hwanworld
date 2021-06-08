import React from 'react';
import Dropdown from './components/Dropdown';
import './App.css';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import { SliderData } from './components/data/SliderData';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Dropdown />
      <Hero slides={SliderData} />
    </>
  );
}

export default App;
