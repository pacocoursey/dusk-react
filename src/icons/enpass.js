import React from 'react';
import PropTypes from 'prop-types';

const Enpass = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path fill={fg} d="M319.75 192.25c0-35.207-28.543-63.75-63.75-63.75-35.206 0-63.75 28.543-63.75 63.75 0 25.437 14.902 47.397 36.449 57.614L192.25 383.5h127.5l-36.447-133.636c21.546-10.216 36.447-32.177 36.447-57.614z" />
    </svg>
  );
};

Enpass.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

Enpass.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default Enpass;
