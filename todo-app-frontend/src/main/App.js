import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Todo from '../container/todo';
import About from '../container/about';
import Menu from '../component/menu';

export default props => (
  <div className='container'>
    <Menu />
    <Todo />
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

//export default App;
