import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Videos from './components/Videos';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Shop />
      <Videos />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
