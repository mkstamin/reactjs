/* eslint-disable react/no-unused-state */
import React, { PureComponent } from 'react';
import ClickCounter from './component/ClickCounter';
import Counter from './component/Counter';
import Section from './component/Section';
import ThemeContext from './context/themeContext';

class App extends PureComponent {
    state = {
        theme: 'dark',
        switchTheme: () => {
            this.setState(({ theme }) => {
                if (theme === 'dark') {
                    return {
                        theme: 'light',
                    };
                }
                return {
                    theme: 'dark',
                };
            });
        },
    };

    render() {
        return (
            <div>
                <Counter>
                    {(counter, incrementCount) => (
                        <ClickCounter count={counter} incrementCount={incrementCount} />
                    )}
                </Counter>
                <ThemeContext.Provider value={this.state}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}

export default App;
