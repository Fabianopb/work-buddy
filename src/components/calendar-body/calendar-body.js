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

    this.times = [8, 9, 10, 11, 12];
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
      time = time < 10 ? `0${time}` : `${time}`;
      const startTime = `${date}T${time}:00:00`;
      const endTime = `${date}T${time + 1}:00:00`;
      return (
        <ListItem
          className={ this._isTimeScheduled(startTime) }
          key={ startTime }
          primaryText={ `${time}:00` }
          onTouchTap={ () => this.props.openDialogCallback(startTime, endTime) } />
      );
    });
  }

  _isTimeScheduled(startTime) {
    for (let event of this.props.events) {
      if (moment(event.starts_at).isSame(moment(startTime))) {
        return 'scheduled';
      }
    }
    return '';
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
