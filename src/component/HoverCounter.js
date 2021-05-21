/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';

const HoverCounter = ({ count, incrementCount }) => (
    <div>
        <h1 onMouseOver={incrementCount}>Hover {count} times</h1>
    </div>
);

export default HoverCounter;
