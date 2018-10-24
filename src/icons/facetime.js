import React from 'react';
import PropTypes from 'prop-types';

const FaceTime = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path fill={fg} d="M162.021 182.268c-11.567 0-20.872 9.318-20.872 20.886v105.707a20.821 20.821 0 0 0 20.872 20.871h127.776c11.567 0 20.886-9.305 20.886-20.871V203.154a20.845 20.845 0 0 0-20.886-20.886H162.021zm210.417 16.015l-55.12 37.666V288.338l55.12 26.47V198.283zm3.162 0v116.525h7.9V198.282h-7.9zm-243.668 17.345c-1.905 0-3.432 1.578-3.432 3.526v13.013c0 1.948 1.526 3.513 3.432 3.513h4.993v-20.052h-4.993z" />
    </svg>
  );
};

FaceTime.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

FaceTime.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default FaceTime;
