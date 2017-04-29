import React, { Component } from 'react';

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
      const startTime = `${date}T${time}:00`;
      const endTime = `${date}T${time + 1}:00`;
      return (
        <ListItem key={ startTime } primaryText={ `${time}:00` } onTouchTap={ () => this.props.openDialogCallback(startTime, endTime) } />
      );
    });
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
