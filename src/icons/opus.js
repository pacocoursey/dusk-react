import React from 'react';
import PropTypes from 'prop-types';

const Console = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path fill={fg} d="M251.75 303.491V128.5l-85 170 76.622 15.324c.632-4.805 3.937-8.76 8.378-10.333z" />
      <path fill="#FFF" d="M243.249 315.5c0-.817.085-1.611.233-2.386L166.75 298.5l42.499 85h46.749v-55.25c-7.04 0-12.749-5.71-12.749-12.75z" />
      <g>
        <path fill="#FFF" d="M268.626 313.824L345.25 298.5l-85.001-170v174.9a91c4.442 1.573 7.746 5.528 8.377 10.333z" />
        <path fill="#FFF" d="M268.519 313.115c.146.774.229 1.569.229 2.386 0 7.04-5.706 12.75-12.749 12.75v55.25h46.751l42.501-85-76.732 14.614z" />
      </g>
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
