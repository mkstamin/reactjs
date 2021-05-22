import React, { PureComponent } from 'react';
import ClickCounter from './component/ClickCounter';
import Counter from './component/Counter';
import Section from './component/Section';
import ThemeContext from './context/themeContext';

class App extends PureComponent {
    state = {
        theme: 'dark',
    };

    render() {
        const { theme } = this.state;
        return (
            <div>
                <Counter>
                    {(counter, incrementCount) => (
                        <ClickCounter count={counter} incrementCount={incrementCount} />
                    )}
                </Counter>
                <ThemeContext.Provider value={{ theme }}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}

export default App;
