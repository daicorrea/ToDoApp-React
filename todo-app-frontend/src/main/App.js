import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Todo from '../container/todo';
import About from '../container/about';
import Menu from '../component/menu';


class App extends Component {
  render() {
    return (
      <div className='container'>
        <Menu />
        <Todo />
        <About />
      </div>
    );
  }
}

export default App;
