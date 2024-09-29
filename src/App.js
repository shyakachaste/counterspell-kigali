import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import FAQ from './components/FAQ';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Schedule />
      <FAQ />
      <Footer/>
    </div>
  );
}

export default App;

