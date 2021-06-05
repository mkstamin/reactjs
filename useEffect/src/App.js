import React, { useState } from 'react';
import Counter from './components/Counter';

const App = () => {
    const [show, setShow] = useState(true);

    return (
        <div>
            <div>{show && <Counter />}</div>
            <p>
                <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
                    {show ? 'Hide Post' : 'Show Post'}
                </button>
            </p>
        </div>
    );
};

export default App;
