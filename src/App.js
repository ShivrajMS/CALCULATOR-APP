import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
    setResult(0);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input)); // Note: Avoid using eval in production for security reasons.
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly />
          <div className="result">Result: {result}</div>
        </div>
        <div className="buttons">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/'].map((item) => (
            <button key={item} onClick={() => handleClick(item.toString())}>
              {item}
            </button>
          ))}
          <button onClick={clearInput}>Clear</button>
          <button onClick={calculateResult}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
