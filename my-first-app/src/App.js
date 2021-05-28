import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person />
      </div>
    );
  }

  // render(){
  //   return React.createElement('div', { className:'App' }, React.createElement('h1', null, 'I\'m robot!!'));
  // }
}

export default App;
