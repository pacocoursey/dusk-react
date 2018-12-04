import React from 'react';
import PropTypes from 'prop-types';

const VLC = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <g fill={fg}>
        <path d="M307.904 258.21l-.002.002.002.005zm-117.732 43.746l.02-.058-.02.058zm.019-.058l.025-.077a1.115 1.115 0 0 1-.025.077zm.026-.077l.025-.075-.025.075z" />
        <path d="M255.608 277.25c38.002 0 52.263-18.996 52.294-19.038l-14.696-48.111s-13.139 10.482-37.591 10.482-37.662-10.482-37.662-10.482l-14.748 48.194s14.634 18.955 52.403 18.955zM255.58 171c16.682 0 22.965-8.437 22.965-8.437l-9.769-31.237s-.581-2.826-13.196-2.826c-13.062 0-13.196 2.819-13.196 2.819l-9.74 31.217S238.897 171 255.58 171zm112.594 205.303l-27.229-86.658s-.912-5.312-6.607-5.312h-18.113c2.217 7.392 3.543 12.104 5.157 17.623-7.957 12.852-34.919 24.84-65.604 24.875-30.686-.035-57.648-12.023-65.605-24.875 1.614-5.519 2.94-10.231 5.157-17.623h-18.113c-5.695 0-6.607 5.312-6.607 5.312l-27.229 86.658c-2.312 7.357 4.646 7.197 4.646 7.197h215.501s6.957.16 4.646-7.197z" />
        <path d="M190.242 301.746c.023-.067.032-.096 0 0z" />
      </g>
    </svg>
  );
};

VLC.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

VLC.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default VLC;