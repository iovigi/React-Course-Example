import './UserInput.css';
import React from 'react';

const userInput = (props) => {
    return <div className="user-input"><input onChange={props.changed} value={props.username} type="text" /></div>;
}

export default userInput;