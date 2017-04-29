import React, { Component } from 'react';

import './calendar-header.css';

class CalendarHeader extends Component {

  render() {
    return (
      <div className="calendar-title">
        <div className="weekday-title">Mon</div>
        <div className="weekday-title">Tue</div>
        <div className="weekday-title">Wed</div>
        <div className="weekday-title">Thu</div>
        <div className="weekday-title">Fri</div>
      </div>
    );
  }
}

export default CalendarHeader;
