import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
  const {
    size, bg, fg, fg2,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path fill={fg} d="M255.924 398.951l-.004-.523.079.068h.079l-.003.455c59.814-1.305 69.477-19.264 76.292-32.893 6.95-13.902 25.486-196.943 25.486-196.943s.096-.351.092-.969c0 0-.972 18.095-101.881 18.095-100.91 0-102.01-18.095-102.01-18.095h-.001c-.003.619.092.969.092.969s18.536 183.041 25.487 196.943c6.816 13.629 16.478 31.588 76.292 32.893z" />
      <path fill={fg2} d="M357.946 169.568c0-.083-.002-.172-.007-.265a.748.748 0 0 0 .006-.058h-.009c-.295-5.179-7.643-24.191-99.678-24.196h-4.516c-92.036.005-99.384 19.018-99.679 24.196h-.009s0 .02.006.056a5 5 0 0 0-.007.268h.07c.728 2.425 9.007 17.771 101.94 17.771 92.932 0 101.103-15.347 101.812-17.771l.071-.001z" />
    </svg>
  );
};

Icon.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
  fg2: PropTypes.string,
};

Icon.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
  fg2: '#efefef',
};

export default Icon;
