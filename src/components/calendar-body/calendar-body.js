import React, { Component } from 'react';

import moment from 'moment';

import {List, ListItem} from 'material-ui/List';

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
        <List key={ date } className="weekday-table">
          { this._renderCalendarTimes(date, this.times) }
        </List>
      );
    });
  }

  _renderCalendarTimes(date, times) {
    return times.map((time) => {
      const startTime = moment(date).startOf('d').add(time, 'h').valueOf();
      const endTime = moment(startTime).add(1, 'h').valueOf();
      const eventName = this._isTimeScheduled(startTime);
      console.log(eventName);
      return (
        eventName ? (
          <ListItem
            className="scheduled"
            key={ startTime }
            primaryText={ `${moment(startTime).format('HH:mm')} - ${eventName}` } />
        ) : (
          <ListItem
            className="non-scheduled"
            key={ startTime }
            primaryText={ moment(startTime).format('HH:mm') }
            onTouchTap={ () => this.props.openDialogCallback(startTime, endTime) } />
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
