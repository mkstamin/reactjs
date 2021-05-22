/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';

const HoverCounter = ({ count, incrementCount, theme, switchTheme }) => {
    const style = theme === 'dark' ? { backgroundColor: '#000', color: '#fff' } : null;

    return (
        <div>
            <h3 onMouseOver={incrementCount} style={style}>
                Hover {count} times
            </h3>
            <button type="button" onClick={switchTheme}>
                Change Theme
            </button>
        </div>
    );
};

export default HoverCounter;
