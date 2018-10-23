import React from 'react';
import PropTypes from 'prop-types';

const Hyper = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path fill={fg} d="M338.951 269.115L191.875 397.263 237.65 285.11l-64.613-42.249 147.082-128.124-49.785 119.302 68.629 35.076z" />
    </svg>
  );
};

Hyper.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

Hyper.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default Hyper;
