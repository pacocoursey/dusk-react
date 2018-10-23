import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <g fill="none" stroke={fg} strokeWidth="20" strokeMiterlimit="10"><path d="M148 155.201h216M148 205.6h115.2M148 256h144M148 306.401h115.2M148 356.8h216" /></g>
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
