import React from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <input className="calculator-input" disabled />
        <div className="btns">
          <div className="btn" id="AC">AC</div>
          <div className="btn" id="plus-minus">+/-</div>
          <div className="btn" id="percentage">%</div>
          <div className="btn operator">/</div>
          <div className="btn" id="seven">7</div>
          <div className="btn" id="eight">8</div>
          <div className="btn" id="nine">9</div>
          <div className="btn operator" id="multiply">X</div>
          <div className="btn" id="four">4</div>
          <div className="btn" id="five">5</div>
          <div className="btn" id="six">6</div>
          <div className="btn operator" id="minus">-</div>
          <div className="btn" id="one">1</div>
          <div className="btn" id="two">2</div>
          <div className="btn" id="three">3</div>
          <div className="btn operator" id="addition">+</div>
          <div className="btn zero" id="zero">0</div>
          <div className="btn" id="point">.</div>
          <div className="btn operator" id="equal">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
