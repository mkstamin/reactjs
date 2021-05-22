import React from 'react';

const ClickCounter = ({ count, incrementCount }) => (
    <div>
        <button type="button" onClick={incrementCount}>
            Clicked {count} times
        </button>
    </div>
);

export default ClickCounter;
