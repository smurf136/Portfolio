import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/index';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div className='App'>
      <ParallaxProvider>
        <Profile />
      </ParallaxProvider>
    </div>
  );
}

export default App;
