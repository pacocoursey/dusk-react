import React from 'react';
import PropTypes from 'prop-types';

const Affinity = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path fill={fg} d="M383.5 319.806L283.062 145.805H271.55l-3.358-5.85h-40.16l-18.872 32.724 7.889 13.664-39.217 67.901-23.703 13.664-25.591 44.387h-.038l19.967 34.574h6.907l5.586 9.813h109.118l8.907 15.361h3.888l-8.907-15.361h87.906l21.628-36.876zm-142.447-13.21l7.662 13.248h-66.392l69.374-119.838 61.711 106.665-72.355-.075z" />
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
