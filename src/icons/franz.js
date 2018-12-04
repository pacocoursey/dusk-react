import React from 'react';
import PropTypes from 'prop-types';

const Franz = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <g fill={fg}>
        <path d="M312.564 306.035c-2.711 0-5.432-.157-8.152-.458v18.133c0 5.75 6.132 8.818 14.564 8.818 8.428 0 27.592 1.531 35.255-11.882 3.947-6.899 6.467-14.606 7.986-21.064-13.409 4.221-30.221 6.453-49.653 6.453M338.641 244.814c5.279 4.106 16.897 7.991 24.192 8.129-.819-19.202-1.702-40.844-1.702-48.039 0-13.414.39-25.484-3.832-25.484-10.731 0-8.05 46.564-21.46 58.06a51.337 51.337 0 0 0-2.576 2.37c2.029 2.046 3.888 3.809 5.378 4.964M152.175 252.71c7.174-.908 16.587-4.317 21.188-7.896 1.832-1.425 4.231-3.77 6.811-6.431-.339-.31-.679-.615-1.014-.904-13.414-11.496-10.732-58.06-21.462-58.06-4.22 0-3.832 12.071-3.832 25.484 0 7.166-.876 28.667-1.691 47.807M199.439 306.035c-17.903 0-33.585-1.888-46.426-5.487 1.54 6.251 4.004 13.538 7.75 20.098 7.667 13.414 26.828 11.882 35.26 11.882 8.43 0 14.562-3.068 14.562-8.818v-18.523a74.95 74.95 0 0 1-11.146.848" />
        <path d="M375.84 261.448c-2.266 0-4.677.777-7.163 2.312-.356.216-1.8.934-5.448.934-9.846 0-24.409-4.859-31.802-10.609-3.692-2.87-8.267-7.723-13.108-12.86-10.185-10.804-19.805-21.009-28.131-21.009-5.919 0-12.735 2.758-19.325 5.425-5.491 2.222-11.169 4.519-14.861 4.519-3.696 0-9.372-2.297-14.863-4.519-6.59-2.667-13.406-5.425-19.323-5.425-8.327 0-17.949 10.205-28.133 21.009-4.844 5.137-9.418 9.99-13.11 12.86-7.392 5.75-21.954 10.609-31.801 10.609-3.649 0-5.09-.718-5.444-.934-2.486-1.536-4.897-2.312-7.167-2.312-3.213 0-5.922 1.68-7.072 4.379-1.417 3.336-.235 7.427 3.157 10.949 10.715 11.131 35.207 17.514 67.194 17.514 21.001 0 39.962-11.021 50.702-21.328 2.179-2.093 5.022-2.198 5.57-2.198l.017-.005.104.039.387-.034h.072c.547 0 3.391.105 5.568 2.198 10.744 10.308 29.704 21.328 50.702 21.328 31.987 0 56.481-6.382 67.196-17.514 3.395-3.522 4.57-7.613 3.157-10.949-1.151-2.699-3.858-4.379-7.075-4.379" />
      </g>
    </svg>
  );
};

Franz.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

Franz.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default Franz;