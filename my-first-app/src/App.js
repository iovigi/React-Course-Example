import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  // return (
  //   // <div className="App">
  //   //   <header className="App-header">
  //   //     <img src={logo} className="App-logo" alt="logo" />
  //   //     <p>
  //   //       Edit <code>src/App.js</code> and save to reload.
  //   //     </p>
  //   //     <a
  //   //       className="App-link"
  //   //       href="https://reactjs.org"
  //   //       target="_blank"
  //   //       rel="noopener noreferrer"
  //   //     >
  //   //       Learn React
  //   //     </a>
  //   //   </header>
  //   // </div>

    
  // );

  render(){
    return React.createElement('div', { className:'App' }, React.createElement('h1', null, 'I\'m robot!!'));
  }
}

export default App;
