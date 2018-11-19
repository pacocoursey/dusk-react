import React from 'react';
import PropTypes from 'prop-types';

const VSCode = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path fill={fg} d="M321.205 128.5l-104.22 103.019-62.746-47.254-25.859 8.637 63.836 63.104-63.836 63.1 25.859 8.64 62.746-47.258h.003L321.201 383.5l62.418-26.52V155.021L321.205 128.5zm-.004 73.505V309.99l-71.699-53.992 71.699-53.993z" />
    </svg>
  );
};

VSCode.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

VSCode.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default VSCode;
