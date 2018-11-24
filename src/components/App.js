import React, { Component } from 'react';

import Button from './Button';

import logo from '../assets/logo.png';
import './app.sass';

class App extends Component {
  render() {
    return (
      <div className="raknroll">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
        </header>
        <main className="main">
          <p className="title">
            DZIĘKUJEMY ZA TWOJE WARKOCZE! ABY SPRWDŹCIIĆ, CZY DO NAS DOTARŁY WYBIERZ SPOSÓB W JAKI BYŁY PRZEKAZANE.
          </p>

          <div className="button-container">
            <Button title="WYSYŁAŁEM SAMODZIELNIE" />
            <Button title="PRZEKAZANE SALONOWI" />
          </div>

          {/* <form className="form">
            <label>Name:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form> */}
        </main>
      </div>
    );
  }
}

export default App;
