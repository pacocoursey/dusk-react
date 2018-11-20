import React from 'react';
import PropTypes from 'prop-types';

const Finder2 = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <g fill={fg}>
        <path d="M368.566 156.07H281.09c8.468-12.341 14.919-19.711 15.103-19.922a4.592 4.592 0 0 0-.382-6.483 4.586 4.586 0 0 0-6.487.382c-.878.983-9.281 10.567-19.463 26.023H143.434a4.594 4.594 0 0 0-4.595 4.594v188.377a4.594 4.594 0 0 0 4.595 4.595h129.589a154.792 154.792 0 0 0 11.06 27.388 4.59 4.59 0 0 0 4.08 2.476c.712 0 1.438-.165 2.113-.514a4.596 4.596 0 0 0 1.957-6.198 143.335 143.335 0 0 1-9.547-23.152h85.881a4.594 4.594 0 0 0 4.595-4.595V160.664a4.592 4.592 0 0 0-4.596-4.594zM148.028 344.446V165.259h116.026c-15.282 25.192-32.048 61.466-33.32 100.933a4.604 4.604 0 0 0 1.291 3.345 4.58 4.58 0 0 0 3.299 1.401h35.369c-1.576 6.442-3.708 17.662-4.153 31.799-4.214.234-8.495.363-12.837.363-32.218 0-61.944-6.736-75.741-17.151a4.585 4.585 0 0 0-6.433.896 4.588 4.588 0 0 0 .896 6.432c15.521 11.73 46.667 19.012 81.278 19.012 4.332 0 8.609-.115 12.805-.335a160.803 160.803 0 0 0 4.099 32.498H148.028v-.006zm215.944 0h-83.846c-2.899-11.872-4.094-23.133-4.301-33.195 25.753-2.412 47.604-8.978 59.643-18.346a4.593 4.593 0 0 0 .804-6.446c-1.558-2.003-4.447-2.371-6.446-.804-10.443 8.127-30.467 14.032-53.936 16.352.749-20.377 5.118-33.945 5.21-34.211a4.599 4.599 0 0 0-4.36-6.047h-36.587c2.514-37.896 20.078-73.058 34.887-96.486h88.932v179.183z" />
        <path d="M295.054 192.826h9.189v32.617h-9.189zm-96.486 0h9.188v32.617h-9.188z" />
      </g>
    </svg>
  );
};

Finder2.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

Finder2.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default Finder2;
