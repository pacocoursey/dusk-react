import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path fill={fg} d="M367.261,359.488L242.12,133.033c-1.199-2.166-3.623-3.35-6.065-2.962c-2.442,0.387-4.384,2.263-4.852,4.693 l-49.04,254.041c-0.486,2.522,0.721,5.066,2.98,6.286c2.26,1.222,5.051,0.833,6.891-0.958l74.383-72.354l93.104,45.827 c1.114,0.551,2.343,0.72,3.513,0.533c1.245-0.197,2.422-0.793,3.334-1.75C368.14,364.528,368.503,361.735,367.261,359.488z" />
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
