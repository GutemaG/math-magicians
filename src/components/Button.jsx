import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { value, handleClick, className } = props;
  return (
    <button type="button" className={className} onClick={handleClick}>
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: 'btn',
};

export default Button;
