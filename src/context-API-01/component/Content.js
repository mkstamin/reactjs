import React from 'react';
import ThemeContext from '../context/themeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

const Content = () => (
    <div>
        <h2>This is a content</h2>
        <Counter>
            {(counter, incrementCount) => (
                <ThemeContext.Consumer>
                    {({ theme }) => (
                        <HoverCounter
                            count={counter}
                            incrementCount={incrementCount}
                            theme={theme}
                        />
                    )}
                </ThemeContext.Consumer>
            )}
        </Counter>
    </div>
);

export default Content;
