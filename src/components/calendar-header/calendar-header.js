import React, { Component } from 'react';

import './calendar-header.css';

class CalendarHeader extends Component {

  constructor(props) {
    super(props);
    this.weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  }

  _renderHeaderDates(dates) {
    return dates.map((date, index) => {
      return ( <div key={ index } className="weekday-title">{this.weekdays[index]}: {date}</div> );
    });
  }

  render() {
    return (
      <div className="calendar-title">
        { this._renderHeaderDates(this.props.dates) }
      </div>
    );
  }
}

export default CalendarHeader;
