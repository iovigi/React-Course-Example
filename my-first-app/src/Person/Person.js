import React from 'react';

const person = (props) => {
    return <div>
        <p>I'am {props.name}! age:{props.age} random: {Math.random()}</p>
        <p>{props.children}</p>
    </div>
};

export default person;