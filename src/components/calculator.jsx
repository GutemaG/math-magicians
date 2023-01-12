import React from 'react';
import calculate from '../logic/calculate';
import DisplayButtons from './DisplayButtons';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(event) {
    const value = event.target.innerText;
    const res = calculate(this.state, value);
    this.setState(res);
  }

  render() {
    const { total, next, operation } = this.state;
    const r = (total || '') + (operation || '') + (next || '') || 0;
    return (
      <div className="calculator">
        <input className="calculator-input" disabled value={r} />
        <DisplayButtons handleClick={this.handleEvent} />
      </div>
    );
  }
}

export default Calculator;
