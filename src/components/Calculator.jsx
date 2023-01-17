import React, { useState } from 'react';
import calculate from '../logic/calculate';
import DisplayButtons from './DisplayButtons';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const handleEvent = (event) => {
    const value = event.target.innerText;
    const res = calculate(state, value);
    setState(res);
  };
  const { total, next, operation } = state;
  const r = (total || '') + (operation || '') + (next || '') || 0;
  return (
    <div className="calculator">
      <h1>Lets Do Some Math!</h1>
      <div>
        <input className="calculator-input" disabled value={r} />
        <DisplayButtons handleClick={handleEvent} />
      </div>
    </div>
  );
};

export default Calculator;
