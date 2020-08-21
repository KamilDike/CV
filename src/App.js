import React from 'react';
import './App.css';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Profile from './components/Profile';
import Skills from './components/Skills';
import CV from './components/CV';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Presentation/>
      <Profile/>
      <Skills/>
      <CV activate/>
      <Footer/>
    </div>
  );
}

export default App;
