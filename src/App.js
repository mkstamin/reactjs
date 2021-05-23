import React, { PureComponent } from 'react';
import Counter from './components/Counter';

class app extends PureComponent {
    render() {
        return (
            <div className="app">
                <Counter />
            </div>
        );
    }
}

export default app;
