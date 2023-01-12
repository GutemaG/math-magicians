import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class Button extends React.Component {
  render() {
    const { value, handleClick, className } = this.props;
    return (
      <button type="button" className={className} onClick={handleClick}>{value}</button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: 'btn',
};
