import React from 'react';
import PropTypes from 'prop-types';

const Framer = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <g fill={fg}>
        <path d="M171 142.5h170v85h-85l-85-85zM171 227.5h85l85 85H171v-85zM171 312.5h85v85l-85-85z" />
      </g>
    </svg>
  );
};

Framer.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

Framer.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default Framer;
