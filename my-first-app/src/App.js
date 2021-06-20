import './App.css';
import React, { Component, useState } from 'react';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Iliya', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Petar', age: 30 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Petar', age: 30 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Iliya', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Petar', age: 30 }
      ]
    });
  };

  togglePersonsHanlder = () => {
    const doesShow = this.state.showPersons;

    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          <Person name={this.state.persons[0].name
          } age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Text')}
            changed={this.nameChangedHandler}>My Hobbies:Racing</Person>
        </div>
      );
    }

    return (
      <div className="App">
        <button style={style} onClick={this.togglePersonsHanlder}>{!this.state.showPersons ? 'Show' : 'Hide'}</button>
        {persons}
      </div >
    );
  }

  // render(){
  //   return React.createElement('div', { className:'App' }, React.createElement('h1', null, 'I\'m robot!!'));
  // }
}

export default App;

/*const App = props => {
  const [state, setState] = useState({
    persons: [
      { name: 'Iliya', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Petar', age: 30 }
    ]
  });

  let switchNameHandler = () => {
    setState({
      persons: [
        { name: 'Doe', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Petar', age: 30 }
      ]
    });
  }

  return (
    <div className="App">
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={state.persons[0].name} age={state.persons[0].age} />
      <Person name={state.persons[1].name} age={state.persons[1].age}>My Hobbies:Racing</Person>
    </div>
  );
}

export default App;*/
