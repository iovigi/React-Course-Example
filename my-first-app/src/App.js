import './App.css';
import React, { Component, useState } from 'react';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Iliya', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Petar', age: 30 }
    ]
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

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer'
    };

    return (
      <div className="App">
        <button style={style} onClick={() => this.switchNameHandler('Doe')}>Switch Name</button>
        <Person name={this.state.persons[0].name
        } age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Text')}
          changed={this.nameChangedHandler}>My Hobbies:Racing</Person>
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
