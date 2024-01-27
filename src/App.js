import React from 'react';
import './style.css';
import Header from './header.js';
import Landing from './assets/images/landing.png';

export default function App() {
  return (
    <div>
      <Header/>
      <section className='landing'>
        <div className='container'>
          <img src={Landing} alt="Zerodha, no. 1 stock broker in India"/>
          <h1>Invest in everything</h1>
          <h5>Online platform to invest in stocks, derivatives, mutual funds, and more</h5>
          <a>Sign up now</a>
        </div>
      </section>
    </div>
  );
}
