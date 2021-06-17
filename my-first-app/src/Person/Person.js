import './Person.css';
import React from 'react';

const person = (props) => {
    return <div className="Person">
        <p onClick={props.click}>I'am {props.name}! age:{props.age} random: {Math.random()}</p>
        <p>{props.children}</p>
        <input onChange={props.changed} value={props.name} type="text" />
    </div>
};

export default person;