import React from 'react';
import PropTypes from 'prop-types';

const Lightroom = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path fill={fg} d="M261.739 305.981v39.271H157.188V166.748h40.801v139.233h63.75zM354.812 215.199v43.352c-15.811-2.551-38.251 3.824-38.251 29.07v57.631h-38.25V217.75h38.25v22.695c5.1-17.086 22.186-25.246 38.251-25.246z" />
    </svg>
  );
};

Lightroom.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

Lightroom.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default Lightroom;
