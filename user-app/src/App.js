import './App.css';
import React, { Component } from 'react';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    username: 'firstName'
  }

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    const style = {
      fontSize: '15px',
      textAlign: 'center'
    };

    return (
      <div>
        <UserInput username={this.state.username} changed={this.usernameChangedHandler} />
        <UserOutput username={this.state.username} profile='This is profile' style={style} />
        <UserOutput username={this.state.username} profile='This is profile 2' style={style} />
      </div>
    );
  }
}

export default App;
