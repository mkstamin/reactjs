import React, { useReducer } from 'react';

const initialState = { count: 0 };
const initialState3 = { count: 3 };

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return { count: state.count + action.value };
        case 'dic':
            return { count: state.count - action.value };
        default:
            return state;
    }
};

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [state3, dispatch3] = useReducer(reducer, initialState3);
    return (
        <div>
            <div>
                <h2>count: {state.count}</h2>
                <button
                    type="button"
                    onClick={() => {
                        dispatch({ type: 'inc', value: 1 });
                    }}
                >
                    + (1) Increment
                </button>
                <button
                    type="button"
                    onClick={() => {
                        dispatch({ type: 'dic', value: 1 });
                    }}
                >
                    - (1) Decrement
                </button>
            </div>

            <div>
                <h2>count: {state3.count}</h2>
                <button
                    type="button"
                    onClick={() => {
                        dispatch3({ type: 'inc', value: 3 });
                    }}
                >
                    + (3) Increment
                </button>
                <button
                    type="button"
                    onClick={() => {
                        dispatch3({ type: 'dic', value: 3 });
                    }}
                >
                    - (3) Decrement
                </button>
            </div>
        </div>
    );
};

export default Counter;
