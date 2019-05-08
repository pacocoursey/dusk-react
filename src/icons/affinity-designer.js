import React from 'react';
import PropTypes from 'prop-types';

const Affinity = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path d="M383.5 327.488L283.062 153.487H271.55l-3.358-5.85h-40.16L209.16 180.36l7.889 13.664-39.217 67.9-23.703 13.665-25.591 44.387h-.038l19.967 34.574h6.907l5.586 9.813h200.912l21.628-36.876v.001zm-142.447-13.21l7.662 13.248h-66.392l69.374-119.838 61.711 106.665-72.355-.075z" fill={fg} />
      <path fillRule="evenodd" clipRule="evenodd" d="M277.557 225.188l-32.81 55.559 23.37 40.601-17.334 9.978-29.188-50.709 38.74-65.599 17.222 10.17z" fill={fg} />
    </svg>
  );
};

Affinity.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

Affinity.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default Affinity;
