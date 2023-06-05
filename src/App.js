import React, { createContext } from 'react';
import { useState, useReducer, useEffect } from 'react';
import './App.css';

const counterContext = createContext();

const initialCountState = {
  count: 0,
};

const reducer = (state, action) => {
  if (action.type === 'increment') {
    return {
      count: state.count + 1,
    };
  } else if (action.type === 'decrement') {
    if (state.count === 0) {
      return {
        count: 0,
      };
    } else {
      return {
        count: state.count - 1,
      };
    }
  } else {
    throw new Error('Unknown action type');
  }
};

const CounterAppWithReducer = () => {
  // using useState to create the count state
  const [count, setCount] = useState(0);

  // changing the title depend on the count value
  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);

  // using useReducer for managing state
  const [state, dispatch] = useReducer(reducer, initialCountState);

  return (
    <counterContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <h1>Counter App</h1>
        <p>Count - {state.count}</p>
        <div className="button-container">
          <button onClick={() => dispatch({ type: 'increment' })}>
            Increment
          </button>
          <button onClick={() => dispatch({ type: 'decrement' })}>
            Decrement
          </button>
        </div>
      </div>
    </counterContext.Provider>
  );
};

function App() {
  return (
    <div>
      <CounterAppWithReducer />
    </div>
  );
}

export default App;
