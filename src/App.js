import React from 'react';
import './style.css';
import Header from './header.js';
import Landing from './assets/images/landing.png';

export default function App() {
  return (
    <div>
      <Header/>
      <center>
        <img src="assets/images/landing.png" alt="Zerodha, no. 1 stock broker in India"/>
      </center>
    </div>
  );
}
