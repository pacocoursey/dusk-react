import React from 'react';
import PropTypes from 'prop-types';

const GitHub = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path d="M223.469 348.01c-59.147 17.745-59.147-29.573-82.806-35.488M306.274 383.5v-45.78a39.88 39.88 0 0 0-11.12-30.875c37.145-4.14 76.182-18.217 76.182-82.806 0-16.513-6.364-32.4-17.744-44.36a60.003 60.003 0 0 0-1.065-44.597c-6.068-14.171-13.958-4.14-46.253 17.508a158.321 158.321 0 0 0-82.805 0c-32.295-21.648-46.253-17.508-46.253-17.508a60.003 60.003 0 0 0-1.065 44.597 64.367 64.367 0 0 0-17.744 44.715c0 64.116 39.037 78.193 76.181 82.806a39.886 39.886 0 0 0-11.12 30.52v45.78" fill="none" stroke={fg} strokeWidth="19.045334" />
    </svg>
  );
};

GitHub.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

GitHub.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default GitHub;
