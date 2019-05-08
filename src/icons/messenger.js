import React from 'react';
import PropTypes from 'prop-types';

const Messenger = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path fillRule="evenodd" clipRule="evenodd" d="M175.607 384v-45.415C147.164 316.94 129 283.975 129 247.056 129 181.855 185.649 129 255.528 129c69.885 0 126.529 52.855 126.529 118.056 0 65.196-56.644 118.055-126.529 118.055-13.037 0-25.619-1.841-37.456-5.253L175.607 384zm-1.826-97.032l68.236-72.247 32.751 33.476 61.411-33.476-67.851 72.247-32.446-34.072-62.101 34.072z" fill={fg} />
    </svg>
  );
};

Messenger.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

Messenger.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default Messenger;