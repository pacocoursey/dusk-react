import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <g fill={fg}><path d="M256.004 301.898h-66.302l-8.925 28.051h-44.626l60.691-178.504h52.021l60.691 178.504h-44.626l-8.924-28.051zm-12.24-38.25l-20.91-65.537-20.911 65.537h41.821zM319.75 168.276c0-12.495 10.455-22.95 22.95-22.95s22.95 10.455 22.95 22.95-10.455 22.95-22.95 22.95-22.95-10.455-22.95-22.95zm3.826 34.171h38.251v127.502h-38.251V202.447z" /></g>
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
