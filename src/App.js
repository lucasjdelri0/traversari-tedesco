import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {I18nextProvider, useTranslation} from "react-i18next";
import i18n from "./i18n";
import LanguageProvider from "./provider/ContextProvider";

class App extends Component {
  render() {
      return (
          <I18nextProvider i18n={i18n}>
          <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
        </I18nextProvider>
    );
  }
}

export default App;
