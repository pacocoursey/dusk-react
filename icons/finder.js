import React from 'react';
import PropTypes from 'prop-types';

const Finder = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path fill={fg} d="M179.6 246V11.604a255.57 255.57 0 0 0-5 1.616 253.22 253.22 0 0 0-15 5.576V266h172.8v234.396a255.595 255.595 0 0 0 5-1.617 253.192 253.192 0 0 0 15-5.573V246H179.6z" />
    </svg>
  );
};

Finder.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

Finder.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default Finder;
