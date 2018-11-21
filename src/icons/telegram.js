import React from 'react';
import PropTypes from 'prop-types';

const Telegram = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path fill={bg} d="M224.412 349.983c-7.597 0-6.306-2.869-8.925-10.103l-22.341-73.523L365.109 164.34" />
      <path fill={fg} d="M224.412 349.983c5.863 0 8.453-2.682 11.725-5.862l31.267-30.402-39.002-23.519" />
      <path fill={fg} d="M228.398 290.206l94.502 69.819c10.784 5.951 18.566 2.87 21.254-10.012l38.467-181.271c3.938-15.789-6.019-22.951-16.336-18.268l-225.878 87.098c-15.418 6.185-15.329 14.786-2.811 18.619l57.966 18.092 134.195-84.663c6.335-3.841 12.149-1.776 7.378 2.459" />
    </svg>
  );
};

Telegram.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

Telegram.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default Telegram;
