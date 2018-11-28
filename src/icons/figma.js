import React from 'react';
import PropTypes from 'prop-types';

const Figma = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <g fill={fg}>
        <path d="M129.71 379.768c-.009-.001-.016-.006-.025-.007l-.016-.001.041.008z" />
        <path d="M298.5 213.5c23.46 0 42.5-19.04 42.5-42.5s-19.04-42.5-42.5-42.5h-85c-23.46 0-42.5 19.04-42.5 42.5s19.04 42.5 42.5 42.5c-23.46 0-42.5 19.04-42.5 42.5s19.04 42.5 42.5 42.5c-23.46 0-42.5 19.04-42.5 42.5s19.04 42.5 42.5 42.5S256 364.46 256 341V213.5h42.5z" />
        <path d="M298.5 213.5c-23.46 0-42.5 19.04-42.5 42.5s19.04 42.5 42.5 42.5S341 279.46 341 256s-19.04-42.5-42.5-42.5z" />
      </g>
    </svg>
  );
};

Figma.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

Figma.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default Figma;
