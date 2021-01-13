import React from 'react'

require('./SliderWrapper.scss')

const SliderWrapper = ({ children }) => (
  <div className="slider-wrapper">
    {children}
  </div>
);

export default SliderWrapper;
