import React from 'react';
import IconArrowDown from '../../icons/Icons/IconArrowDown'

require('./ShowDetailsButton.scss')

const ShowDetailsButton = ({ onClick }) => (
  <button onClick={onClick} className="show-details-button">
    <span>
      <IconArrowDown />
    </span>
  </button>
);

export default ShowDetailsButton;
