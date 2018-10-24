import React from 'react';
import PropTypes from 'prop-types';

const Dotgrid = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <g fill={fg} stroke={fg} strokeWidth="20" strokeMiterlimit="10">
        <circle cx="151.6" cy="155.2" r="7.2" />
        <circle cx="259.6" cy="155.2" r="7.2" />
        <circle cx="360.4" cy="155.2" r="7.2" />
        <circle cx="360.4" cy="256" r="7.2" />
        <circle cx="259.6" cy="256" r="7.2" />
        <circle cx="360.4" cy="356.8" r="7.2" />
        <circle cx="259.6" cy="356.799" r="7.2" />
        <circle cx="151.6" cy="356.799" r="7.2" />
        <circle cx="151.6" cy="256" r="7.2" />
      </g>
    </svg>
  );
};

Dotgrid.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

Dotgrid.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default Dotgrid;
