import React, { useCallback, useMemo, useReducer } from 'react';
import './App.css';
import Logger from './Logger';

type State = {
    count: number;
};

type Action = 
    | { type: 'increment' } 
    | { type: 'decrement' } 
    | { type: 'reset' };

function counterReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    // 1. Action handlers for your counter buttons
    const handleIncrement = () => dispatch({ type: 'increment' });
    const handleDecrement = () => dispatch({ type: 'decrement' });
    const handleReset = () => dispatch({ type: 'reset' });

    // 2. Performance optimization: memoize the derived even/odd state
    const isEven = useMemo(() => {
        return state.count % 2 === 0;
    }, [state.count]);

    // 3. Performance optimization: stabilize function reference so <Logger /> memo works
    const handleLog = useCallback(() => {
        console.log('Logger button clicked');
    }, []);

    return (
        <div>
            <div style={{ padding: '20px', fontFamily: 'Arial' }}>
                <h1>Advanced Hooks Example</h1>
                <p>Count: {state.count}</p>
                
                <p style={{ color: isEven ? 'green' : 'orange' }}>
                    This number is {isEven ? 'Even' : 'Odd'}
                </p>
                
                <div style={{ marginBottom: '10px' }}>
                    <button onClick={handleIncrement}>Increment</button>{' '}
                    <button onClick={handleDecrement}>Decrement</button>{' '}
                    <button onClick={handleReset}>Reset</button>
                </div>
                
                {/* Passing the stable callback here */}
                <Logger onLog={handleLog} />
            </div>
        </div>
    );
}

export default App;