import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = (props) => {
  const {
    size, bg, fg, fg2,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path fill={fg} d="M203.238 128.5l15.944 192.78 31.164-17.031L203.238 128.5z" />
      <path fill={fg2} d="M203.257 128.532l43.816 163.509 32.353-.205-76.169-163.304z" />
      <circle fill={fg2} cx="259.565" cy="334.303" r="49.197" />
    </svg>
  );
};

Dashboard.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
  fg2: PropTypes.string,
};

Dashboard.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
  fg2: '#efefef',
};

export default Dashboard;
