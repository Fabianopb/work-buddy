import React, { Component } from 'react';

import moment from 'moment';

import './calendar-body.css';

class CalendarBody extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dates: this.props.dates
    };

    this.times = [8, 9, 10, 11, 12, 13, 14, 15, 16];
  }

  _renderCalendarDates(dates) {
    return dates.map((date) => {
      return (
        <div key={ date } className="calendar-column">
          { this._renderCalendarTimes(date, this.times) }
        </div>
      );
    });
  }

  _renderCalendarTimes(date, times) {
    return times.map((time) => {
      const startTime = moment(date).startOf('d').add(time, 'h').valueOf();
      const endTime = moment(startTime).add(1, 'h').valueOf();
      const eventName = this._isTimeScheduled(startTime);
      return (
        eventName ? (
          <div
            className="scheduled"
            key={ startTime } >
            { `${moment(startTime).format('HH:mm')} - ${eventName}` }
          </div>
        ) : (
          <div
            className="non-scheduled"
            key={ startTime }
            onClick={ () => this.props.openDialogCallback(startTime, endTime) } >
            { `${moment(startTime).format('HH:mm')}` }
          </div>
        )
      );
    });
  }

  _isTimeScheduled(startTime) {
    for (let event of this.props.events) {
      if (moment(event.starts_at).isSame(moment(startTime))) {
        return event.name;
      }
    }
    return null;
  }

  render() {
    return (
      <div className="calendar-box">
        { this._renderCalendarDates(this.state.dates) }
      </div>
    );
  }
}

export default CalendarBody;
