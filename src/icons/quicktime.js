import React from 'react';
import PropTypes from 'prop-types';

const Quicktime = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path fill={fg} d="M177.943 141.634c0-11.702 8.292-16.489 18.426-10.639l198.085 114.364c10.135 5.852 10.135 15.426 0 21.277L196.369 381.001c-10.134 5.851-18.426 1.063-18.426-10.639V141.634z" />
    </svg>
  );
};

Quicktime.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

Quicktime.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default Quicktime;
