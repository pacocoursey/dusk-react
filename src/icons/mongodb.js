import React from 'react';
import PropTypes from 'prop-types';

const MongoDB = (props) => {
  const {
    size, bg, fg, fg2,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path fill={fg} d="M311.19 229.209c-13.446-59.224-45.19-78.693-48.602-86.128-3.757-5.258-7.538-14.581-7.538-14.581l2.534 165.016s-1.213 11.656-1.001 24.433c-11.243 1.365-21.974 16.005-13.228 26.139 12.518 2.43 11.646 37.142 11.646 37.142l6.857 2.271s-1.393-18.117.55-26.873c.588-2.65 1.939-4.966 3.537-6.912 1.056-.737 4.188-3.011 8.367-6.834.192-.104.303-.16.303-.16l-.01-.106c16.096-14.836 47.067-52.212 36.585-113.407z" />
      <path fill={fg2} d="M251.004 352.174s-55.396-38.138-52.179-105.426c3.216-67.291 42.701-100.375 50.391-106.377 4.972-5.299 5.45-6.642 5.835-11.871 3.485 7.485 2.633 111.107 3.002 123.302 1.433 47.466-3.136 91.411-7.049 100.372z" />
    </svg>
  );
};

MongoDB.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
  fg2: PropTypes.string,
};

MongoDB.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
  fg2: '#efefef',
};

export default MongoDB;
