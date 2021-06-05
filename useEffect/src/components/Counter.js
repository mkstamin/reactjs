import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const tick = () => {
        console.log('Ticking....');
        setDate(new Date());
    };

    useEffect(() => {
        console.log('Updating..........');
        document.title = `Clicked ${count} times`;
    }, [count]);

    // console.log('Outside UseEffect');

    useEffect(() => {
        // console.log('useEffect');
        const interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <p>Time : {date.toLocaleTimeString(new Date())}</p>

            <p>
                <button type="button" onClick={addClick}>
                    Ckick
                </button>
            </p>
        </div>
    );
};

export default Counter;
