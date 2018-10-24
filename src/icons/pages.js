import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <g fill={fg}><path d="M356.165 133.191c6.254-6.253 16.393-6.253 22.646 0s6.253 16.392-.001 22.646l-24.908 24.909-22.646-22.645 24.909-24.91zM326.727 162.63l-168.81 168.81-13.302 20.459 15.486 15.487 20.46-13.301 168.811-168.81zM141.035 357.378l-12.077 21.137c-.834.832-.496 2.523.755 3.773 1.25 1.25 2.94 1.588 3.774.754l21.135-12.076-13.587-13.588z" /></g>
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
