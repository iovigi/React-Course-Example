import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Iliya', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Petar', age: 30 }
    ]
  }

  switchNameHandler = () => {
    console.log('Click');
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies:Racing</Person>
      </div>
    );
  }

  // render(){
  //   return React.createElement('div', { className:'App' }, React.createElement('h1', null, 'I\'m robot!!'));
  // }
}

export default App;
