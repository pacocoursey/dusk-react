import React from 'react';
import PropTypes from 'prop-types';

const Atom = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <g fill="none" stroke={fg} strokeWidth="10">
        <path strokeLinecap="round" d="M341.672 187.519c4.718-24.007 2.079-42.227-9.069-49.465-3.716-2.413-8.171-3.47-13.187-3.279-27.076 1.027-70.766 38.311-106.461 93.277-42.307 65.146-57.341 130.436-33.558 145.88 11.292 7.33 29.28 2.134 49.604-12.348" />
        <path strokeLinecap="round" d="M363.37 294.05c20.078-7.79 32.427-18.453 33.069-30.696 1.484-28.32-60.147-54.54-137.718-58.604-7.271-.382-14.422-.582-21.418-.559-67.616.228-120.396 18.776-121.742 44.441-.64 12.222 10.495 24.07 29.581 33.905" />
        <path strokeLinecap="round" d="M236.814 145.31c-13.738-11.398-26.622-17.521-36.976-16.744-2.756.206-5.304.886-7.675 2.094-25.265 12.873-17.195 79.459 18.069 148.67 35.265 69.213 84.334 114.872 109.602 101.998 24.301-12.381 17.742-74.428-14.162-140.718" />
        <path strokeMiterlimit="10" d="M273.65 257.981c0 9.249-7.494 16.744-16.744 16.744-9.245 0-16.743-7.495-16.743-16.744h0c0-9.247 7.498-16.743 16.743-16.743 9.25 0 16.744 7.496 16.744 16.743z" />
      </g>
    </svg>
  );
};

Atom.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

Atom.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default Atom;
