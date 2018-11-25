import React, { Component } from 'react';
import hackyeah from '../assets/hackyeah.png';
import logo from '../assets/logo.png';
import './app.sass';
import Button from './Button';
import UserTable from './UserTable';




const API = 'https://raknroll-api.herokuapp.com/';
const DEFAULT_QUERY = 'users';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: 0,
      email: "",
      statuses: [],
      afterFirstFetch: false
    }
  }

  handleClick = prop => {
    this.setState({ button: prop })
  }

  checkYourStatus = prop => {
    fetch(API + DEFAULT_QUERY + "?email=" + this.state.email)
      .then(response => response.json())
      .then(data => {
        this.setState({ statuses: data });
        this.setState({ afterFirstFetch: true});
      });
      console.log("First fetch: " + this.state.afterFirstFetch);
  }

  checkOnceAgain = e => {
    this.setState({ statuses: [] });
    this.setState({ afterFirstFetch: false});
  }

  setUserEmail = e => {
    this.setState({ email: e.target.value });
  }

  onKeyPressAction = e => {
    if(e.key === "Enter") {
      e.preventDefault();
      this.checkYourStatus();
    }
  }

  render() {
    const { button } = this.state

    return (
      <div className="raknroll">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
        </header>

        <main className="main">
        {this.state.statuses.length === 0 && (<div>
          {button === 0 ?
            <div className="container">
              <p className="paragraph">
                DZIĘKUJEMY ZA TWOJE WARKOCZE! ABY SPRAWDZIĆ, CZY DO NAS DOTARŁY WYBIERZ SPOSÓB W JAKI BYŁY PRZEKAZANE
              </p>
              <div className="button-container">
                <Button title="WYSYŁANE SAMODZIELNIE" handleClick={() => this.handleClick(1)} />
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

              <form className="form" onSubmit={this.handleSubmit}>
                <input
                  placeholder="EMAIL"
                  type="text"
                  name="name"
                  className="input"
                  onChange={(e) => this.setUserEmail(e)}
                  onKeyPress={(e) => this.onKeyPressAction(e)}
                />
                <Button title="SPRAWDŹ TERAZ" handleClick={() => this.checkYourStatus()} />
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
                    onChange={(e) => this.setUserEmail(e)}
                    onKeyPress={(e) => this.onKeyPressAction(e)}
                  />
                </label>
                <Button title="SPRAWDŹ TERAZ" handleClick={() => this.checkYourStatus()} />
              </form>
            </div>
            : null
          }</div>)}
          <div className="thankyou-container">
            {this.state.statuses.length > 0 && (<div><UserTable users={this.state.statuses} />
            <Button title="WRÓĆ" handleClick={() => this.checkOnceAgain()} /></div>)}
          </div>
          <div className="no-results-container">
            {this.state.statuses.length === 0 && this.state.afterFirstFetch && ("Niestety, nie udało nam się znaleźć Twojej przesyłki. Skontaktuj się z nami telefonicznie: 22 841 27 47 Pracujemy od PN-PT w godzinach 9-16")}
          </div>
        </main>
        <footer className="footer">
          <img src={hackyeah} className="footer__logo" alt="hackyeah" />
        </footer>
      </div>
    );
  }
}

export default App;
