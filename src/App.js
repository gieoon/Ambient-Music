import React from 'react';
import './App.scss';
import './mobile.scss';
import Header from './components/header';
import FloatingHeader from './components/floatingHeader';
import Works from './components/works';
// import Piano from './components/piano';
// import PianoPlus from './components/pianoplus';
// import Voice from './components/voice';
import About from './components/about';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import Venues from './components/venues';

function App() {
  return (
    <div className="App">
      <Header />
      <FloatingHeader />
      <Works />
      {/* <Piano />
      <PianoPlus />
      <Voice /> */}
      <About />
      <Venues />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;

global.getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}