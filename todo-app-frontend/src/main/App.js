import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Todo from '../container/todo';
import About from '../container/about';
import Menu from '../component/menu';

import '../style/bulma/bulma.css'


class App extends Component {
  render() {
    return (
      <div className="container">
          <div className="notification">
            <div className="block">
              <a className="button">Button</a>
              <a className="button is-white">White</a>
              <a className="button is-light">Light</a>
              <a className="button is-dark">Dark</a>
              <a className="button is-black">Black</a>
              <a className="button is-link">Link</a>
            </div>
            <div className="block">
              <a className="button is-primary">Primary</a>
              <a className="button is-info">Info</a>
              <a className="button is-success">Success</a>
              <a className="button is-warning">Warning</a>
              <a className="button is-danger">Danger</a>
            </div>
              This container is <strong>centered</strong> on desktop.
          </div>
      </div>
    );
  }
}

export default App;
