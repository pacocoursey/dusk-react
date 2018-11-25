import React from 'react';
import PropTypes from 'prop-types';

const Console = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path fill={fg} d="M243.249 315.5c0-.669.069-1.319.171-1.96a12.746 12.746 0 0 1 8.33-10.049V128.5l-85 170 42.499 85h46.749v-55.25c-7.04 0-12.749-5.71-12.749-12.75zM345.128 298.524l.122-.024-85.001-170v174.9a12.738 12.738 0 0 1 8.273 9.714l-.003.001c.146.773.229 1.568.229 2.386 0 7.04-5.706 12.75-12.749 12.75v55.25h46.751l42.501-85-.123.023z" />
    </svg>
  );
};

Console.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

Console.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default Console;
