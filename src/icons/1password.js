import React from 'react';
import PropTypes from 'prop-types';

const Password = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path fill={fg} d="M212 119v82.2l22 21.834-22 22.263V393h88v-82.2l-22-21.834 22-22.263V119z" />
    </svg>
  );
};

Password.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

Password.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default Password;
