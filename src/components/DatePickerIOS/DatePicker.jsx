import React, { useState } from 'react';
import dateData from '../DatePickerIOS/dateData';

const DatePicker = (...props) => {
  const [inputs, setInputs] = useState({
    date: '',
    time: '',
    year: ''
  });

  const defaultvalues = {
    value: new Date(),
    min: new Date('1970-01-01'),
    max: new Date('2050-01-01')
  };

  /*  const dateDataList = normalizeDateConfig(dateData); */

  const onValueChange = (name, value) => {
    setInputs(inputs => ({
      ...inputs,
      [name]: value
    }));
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log(chosentime);
    const chosentime = {
      year: inputs.year,
      date: inputs.date,
      time: inputs.time
    };
  };

  return (
    <div className="datepicker">
      <div className="datepicker-caption">
        {dateDataList.map((item, index) => (
          <div key={index} className="datepicker-caption-item">
            {item.caption}
          </div>
        ))}
      </div>
      <div className="datepicker-content">
        {dateDataList.map((item, index) => (
          <DatePickerItem
            key={index}
            value={inputs.value}
            min={min}
            max={max}
            step={item.step}
            type={item.type}
            format={item.format}
            onSelect={onValueChange}
          />
        ))}
      </div>
      <div className="datepicker-navbar">
        <button className="datepicker-navbar-btn" onClick={onSubmit}>
          confirm
        </button>
        <button className="datepicker-navbar-btn" onClick={onCancel}>
          cancel
        </button>
      </div>
      }
    </div>
  );
};
/* 
<DatePicker value={time} isOpen={isOpen} onSelect={handleSelect} onCancel={handleCancel} />;
 */

export default DatePicker;
/* 
    value: Object,
    min: Object,
    max: Object,
    dateData: Object,
    onChange: Function,
    onSelect: Function,
    onCancel: Function
  }; */
