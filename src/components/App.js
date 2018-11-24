import React, { Component } from 'react';

import Button from './Button';

import logo from '../assets/logo.png';
import hackyeah from '../assets/hackyeah.png';

import './app.sass';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: 0
    }
  }

  handleClick = prop => {
    this.setState({ button: prop })
  }

  render() {
    const { button } = this.state

    return (
      <div className="raknroll">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
        </header>

        <main className="main">
          {button === 0 ?
            <div>
              <p className="paragraph">
                DZIĘKUJEMY ZA TWOJE WARKOCZE! ABY SPRAWDZIĆ, CZY DO NAS DOTARŁY WYBIERZ SPOSÓB W JAKI BYŁY PRZEKAZANE
              </p>
              <div className="button-container">
                <Button title="WYSYŁAŁEM SAMODZIELNIE" handleClick={() => this.handleClick(1)} />
                <Button title="PRZEKAZANE SALONOWI" handleClick={() => this.handleClick(2)} />
              </div>
            </div>
            : null}

          {button === 1
            ?
            <div className="option-container">
              <p className="paragrap-2">
                WPISZ ADRES EMAIL, KTÓRY PODAŁEŚ/PODAŁAŚ W OŚWIADCZENIU
              </p>

              <form className="form">
                <label>
                  <input
                    placeholder="EMAIL"
                    type="text"
                    name="name"
                    className="input"
                  />
                </label>
                <Button title="WYŚLIJ" />
              </form>
            </div>
            : null
          }

          {button === 2
            ?
            <div className="option-container">
              <p className="paragrap-2">
                JEŚLI ODDAWAŁEŚ WŁOSY W CIĄGU OSTATNICH DWÓCH MIESIĘCY, SKONTAKTUJ SIĘ Z SALONEM, ABY UPEWNIĆ SIĘ ZE WARKOCZE ZOSTAŁY WYSŁANE
              </p>
              <p className="paragrap-2">
                JEŚLI TEN CZAS MINĄŁ, WPISZ ADRES EMAIL, KTÓRY PODAŁEŚ/PODAŁAŚ W OŚWIADCZENIU
              </p>

              <form className="form">
                <label>
                  <input
                    placeholder="EMAIL"
                    type="text"
                    name="name"
                    className="input"
                  />
                </label>
                <Button title="WYŚLIJ" />
              </form>
            </div>
            : null
          }
        </main>
        <footer className="footer">
          <img src={hackyeah} className="footer__logo" alt="hackyeah" />
        </footer>
      </div>
    );
  }
}

export default App;