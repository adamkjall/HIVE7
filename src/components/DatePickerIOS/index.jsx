import React, { useState } from 'react';

import DatePicker from '../DatePickerIOS/DatePicker.jsx';

import { StyledDatePicker } from './style';

const DatePickerIOS = () => {
  const [time, setTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleSelect = time => {
    setTime(time);
    setIsOpen(false);
  };

  return (
    <StyledDatePicker>
      <button className="select-btn" onClick={handleClick}>
        Välj tid
      </button>
      <DatePicker value={time} isOpen={isOpen} onSelect={handleSelect} onCancel={handleCancel} />
    </StyledDatePicker>
  );
};

export default DatePickerIOS;
