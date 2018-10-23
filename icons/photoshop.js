import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <g fill={fg}><path d="M270.285 212.646c0 33.916-27.285 61.201-62.476 61.201h-26.776v56.102h-40.801V151.445h67.577c35.191 0 62.476 27.286 62.476 61.201zm-40.801 0c0-13.005-9.18-22.95-21.675-22.95h-26.776v45.901h26.776c12.495 0 21.675-9.945 21.675-22.951zM380.699 291.698c0 29.326-25.5 41.821-53.041 41.821-25.5 0-44.881-9.69-54.826-30.346l33.151-18.87c3.314 9.689 10.455 15.045 21.675 15.045 9.181 0 13.771-2.805 13.771-7.905 0-14.025-62.731-6.63-62.731-50.746 0-27.795 23.461-41.82 49.981-41.82 20.655 0 39.016 9.18 49.726 27.285l-32.641 17.596c-3.57-6.631-8.67-11.221-17.085-11.221-6.63 0-10.71 2.551-10.71 7.141-.001 14.534 62.73 4.844 62.73 52.02z" /></g>
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
