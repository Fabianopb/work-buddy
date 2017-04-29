import React, { Component } from 'react';
import moment from 'moment';

import './calendar-header.css';

class CalendarHeader extends Component {

  _renderHeaderDates(dates) {
    return dates.map((date) => {
      return (
        <div key={ date } className="weekday-title">
          <div>{moment(date).format('dddd')}</div>
          <div>{moment(date).format('MMM DD')}</div>
        </div>
      );
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
