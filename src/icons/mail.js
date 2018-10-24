import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <g fill="none" stroke={fg} strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
        <path d="M128.5 160.375h255v191.25h-255z" />
        <path d="M369.318 171.012L256 256l-113.318-84.988" />
      </g>
    </svg>
  );
};

Icon.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

Icon.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default Icon;
