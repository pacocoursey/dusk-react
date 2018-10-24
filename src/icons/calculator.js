import React from 'react';
import PropTypes from 'prop-types';

const Calculator = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path fill={fg} d="M293 361.672h108v20H293zM293 321.073h108v20H293zM293 159.373h108v20H293zM219 159.372h-44v-43.998h-20v43.998h-44v20h44v44h20v-44h44zM210.255 382.486l-31.113-31.113 31.111-31.112-14.143-14.142-31.111 31.111-31.113-31.111-14.141 14.14 31.111 31.114-31.111 31.113 14.141 14.141 31.113-31.112 31.113 31.112z" />
    </svg>
  );
};

Calculator.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

Calculator.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default Calculator;
