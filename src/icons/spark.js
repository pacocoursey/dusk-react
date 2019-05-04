import React from 'react';
import PropTypes from 'prop-types';

const Spark = (props) => {
  const {
    size, bg, fg, fg2,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path d="M374.571 354.763L259.825 131.246c-1.554-2.982-6.096-2.982-7.649 0L137.43 354.763c-1.593 3.094 1.514 6.002 4.821 4.548l86.298-37.352c.678-.299 1.435-.336 2.072-.112.797.261 1.474.82 1.753 1.603l21.634 58.488c.678 1.752 3.307 1.752 3.985 0l21.594-58.451c.319-.783.956-1.379 1.753-1.603a2.851 2.851 0 0 1 2.072.112l86.298 37.352c3.347 1.454 6.454-1.491 4.861-4.585z" fill={fg} />
      <path d="M256 129.01c-1.514 0-3.028.745-3.824 2.236L137.43 354.763c-1.593 3.094 1.514 6.002 4.821 4.548l86.298-37.353c.678-.298 1.435-.335 2.072-.111l22.192-188.14c.159-1.38 1.913-4.697 3.187-4.697z" fill={fg} />
      <path d="M282 321.436c-.5.499-1.721.713-2 1.496l-22 58.825c-1 2.991-3 2.991-4 0l-22.5-59.324c-.319-.782-.743-.773-1.5-.997l22.853-190.367c.319-2.759 6.016-2.759 6.335 0L282 321.436z" fill={fg2} />
    </svg>
  );
};

Spark.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
  fg2: PropTypes.string,
};

Spark.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
  fg2: '#efefef',
};

export default Spark;
