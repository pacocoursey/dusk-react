import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path fill={fg} d="M256 141.831c-70.417 0-127.498 47.545-127.5 106.198.064 37.263 23.57 71.774 61.94 90.933-5.022 11.25-12.56 21.797-22.293 31.208 18.876-3.311 36.596-10.274 51.784-20.342A151.41 151.41 0 0 0 256 354.225c70.415 0 127.497-47.547 127.5-106.197-.003-58.652-57.085-106.197-127.5-106.197zM206 276c-11.046 0-20-8.953-20-19.999 0-11.045 8.954-20 20-20s20 8.955 20 20c0 11.046-8.954 19.999-20 19.999zm50 0c-11.046 0-20-8.953-20-19.999 0-11.045 8.954-20 20-20s20 8.955 20 20c0 11.046-8.954 19.999-20 19.999zm50 0c-11.046 0-20-8.953-20-19.999 0-11.045 8.954-20 20-20s20 8.955 20 20c0 11.046-8.954 19.999-20 19.999z" />
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
