import React from 'react';
import PropTypes from 'prop-types';

const Ableton = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path d="M81 177v159h15.91V177H81zm47.727 0v159h15.91V177h-15.91zm47.728 0v159h15.909V177h-15.91zm47.727 0v159h15.909V177h-15.91zm47.727 0v15.9H431V177H271.91zm0 47.7v15.9H431v-15.9H271.91zm0 47.7v15.9H431v-15.9H271.91zm0 47.7V336H431v-15.9H271.91z" fill={fg} />
    </svg>
  );
};

Ableton.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

Ableton.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default Ableton;
