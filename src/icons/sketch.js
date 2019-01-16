import React from 'react';
import PropTypes from 'prop-types';

const Sketch = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path fill="none" stroke={fg} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M256 371.369L128.5 223.222l55.233-74.848L256 140.631l72.267 7.743 55.233 74.848z" />
      <path fill="none" stroke="#FFF" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M256 371.369L128.5 223.222h255z" />
      <path fill="none" stroke="#FFF" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M256 371.369l-75.88-148.147h151.76zM256 140.631l-75.88 82.591h151.76z" />
      <path fill="none" stroke="#FFF" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M183.733 148.374l-3.613 74.848L256 140.631zM328.267 148.374l3.613 74.848L256 140.631z" />
    </svg>
  );
};

Sketch.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

Sketch.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default Sketch;
