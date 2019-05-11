import React from 'react';
import PropTypes from 'prop-types';

export default (Wrapped) => {
  const Icon = (props) => {
    const {
      size, bg, fg, fg2, circle, ...extraProps
    } = props;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width={size}
        height={size}
        {...extraProps}
      >
        {circle ? <circle fill={bg} cx="256" cy="256" r="256" /> : ''}
        <Wrapped {...props} />
      </svg>
    );
  };

  Icon.propTypes = {
    size: PropTypes.number,
    bg: PropTypes.string,
    fg: PropTypes.string,
    fg2: PropTypes.string,
    circle: PropTypes.bool,
  };

  Icon.defaultProps = {
    size: 512,
    bg: '#1e1e1e',
    fg: '#fff',
    fg2: '#efefef',
    circle: true,
  };

  return Icon;
};
