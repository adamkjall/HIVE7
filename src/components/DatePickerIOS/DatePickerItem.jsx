import React, { useState } from 'react';

const DatePickerItem = (min, max) => {
  const renderDatepickerItem = (date, index) => {
    const className = date < min || date > max ? 'disabled' : '';
    let formatDate;
    return (
      <li key={index} className={className}>
        {formatDate}
      </li>
    );
  };

  const scrollStyle = formatCss({
    transform: `translateY(${this.state.translateY}px)`,
    marginTop: { marginTop }
  });

  return (
    <div className="datepicker-col-1">
      <div ref={viewport => (this.viewport = viewport)} className="datepicker-viewport">
        <div className="datepicker-wheel">
          <ul ref="scroll" className="datepicker-scroll" style={scrollStyle}>
            {dates.map(renderDatepickerItem)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DatePickerItem;
