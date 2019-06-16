import React from 'react';
import Icon from '../icon';

export default Icon(({ fg }) => (
  <g>
    <path fill="none" d="M124 132h263v263H124z" />
    <path fill="none" stroke={fg} strokeWidth="10" d="M129 137h253v253H129z" />
    <path fill={fg} d="M154 350h100v15H154zm33-180v105h-24V170zm12 86.7l20.85-12c3.3 5.85 6.75 9 14.85 9 10.5 0 13.65-6 13.65-12.45V170h24v71.25c0 23.1-16.2 35.85-37.8 35.85-16.65 0-28.65-7.05-35.55-20.4z" />
  </g>
));
