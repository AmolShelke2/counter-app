import React, { useState, useEffect, createContext, useReducer } from 'react';

// Create a context for the counter
const CounterContext = createContext();

// Initial state for the counter
const initialState = {
  count: 0,
};

// Reducer function for handling state updates
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Unsupported action type');
  }
};

const CounterApp = () => {
  // State management using useState
  const [count, setCount] = useState(0);

  // Side effect using useEffect
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // State management using useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <div>
        <h1>Counter App</h1>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: 'decrement' })}>
          Decrement
        </button>
      </div>
    </CounterContext.Provider>
  );
};

const CountApp = () => {
  return (
    <div>
      <CounterApp />
    </div>
  );
};

export default CountApp;
