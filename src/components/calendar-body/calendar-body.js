import React, { Component } from 'react';

import {List, ListItem} from 'material-ui/List';

import './calendar-body.css';

class CalendarBody extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dates: this.props.dates
    };

    this.times = ['8:00', '9:00', '10:00', '11:00', '12:00'];
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
      const startTime = `${date}T${time}`;
      return (
        <ListItem key={ startTime } primaryText={ time } onTouchTap={ () => this.props.openDialogCallback(startTime) } />
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
