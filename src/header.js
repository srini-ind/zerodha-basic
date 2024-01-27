import React from 'react';
import logo from './assets/images/logo.svg';

export default function Header() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="main-container">
          <div className="logo-container">
            <a href="/">
              <img class="logo-img" src={logo} alt="Zerodha logo"/>
            </a>
          </div>
          <div className="nav-links-container">
            <ul class="navbar-links">
              <li class="hide-on-small">
                <a href="https://signup.zerodha.com">Signup</a>
              </li>
              <li class="hide-on-small">
                <a class="nav-links" href="https://zerodha.com/about/">About</a>
              </li>
              <li class="hide-on-small">
                <a class="nav-links" href="https://zerodha.com/products/">Products</a>
              </li>
              <li class="hide-on-small">
                <a class="nav-links" href="https://zerodha.com/pricing/">Pricing</a>
              </li>
              <li class="hide-on-small">
                <a href="https://support.zerodha.com">Support</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}