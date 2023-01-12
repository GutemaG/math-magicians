import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

// eslint-disable-next-line react/prefer-stateless-function
class DisplayButtons extends React.Component {
  render() {
    const { handleClick } = this.props;
    return (
      <div className="btns">
        <Button handleClick={handleClick} value="AC" />
        <Button handleClick={handleClick} value="+/-" />
        <Button handleClick={handleClick} value="%" />
        <Button
          handleClick={handleClick}
          value="÷"
          className="btn operator"
        />
        <Button handleClick={handleClick} value="7" />
        <Button handleClick={handleClick} value="8" />
        <Button handleClick={handleClick} value="9" />
        <Button
          handleClick={handleClick}
          value="x"
          className="btn operator"
        />
        <Button handleClick={handleClick} value="4" />
        <Button handleClick={handleClick} value="5" />
        <Button handleClick={handleClick} value="6" />
        <Button
          handleClick={handleClick}
          value="-"
          className="btn operator"
        />
        <Button handleClick={handleClick} value="1" />
        <Button handleClick={handleClick} value="2" />
        <Button handleClick={handleClick} value="3" />
        <Button
          handleClick={handleClick}
          value="+"
          className="btn operator"
        />
        <Button handleClick={handleClick} value="0" className="btn zero" />
        <Button handleClick={handleClick} value="." />
        <Button
          value="="
          handleClick={handleClick}
          className="btn operator"
        />
      </div>
    );
  }
}

DisplayButtons.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default DisplayButtons;
