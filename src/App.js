import React from 'react';
import './App.css';
import Profile from './components/index';
import { ParallaxProvider } from 'react-scroll-parallax';
import firebase from 'firebase'

function App() {

  let config = {
    apiKey: "AIzaSyAoTmAqEkZW13qpv1bQoiILT8vYtj8Fjvg",
    authDomain: "apiwat-portfolio.firebaseapp.com",
    databaseURL: "https://apiwat-portfolio.firebaseio.com",
    projectId: "apiwat-portfolio",
    storageBucket: "apiwat-portfolio.appspot.com",
    messagingSenderId: "245133150101",
    appId: "1:245133150101:web:f0854b82d91c324023589c",
    measurementId: "G-ZM09M43RPC"
  };
  firebase.initializeApp(config);

  return (
    <div className='App'>
      <ParallaxProvider>
        <Profile db={firebase}/>
      </ParallaxProvider>
    </div>
  );
}

export default App;
