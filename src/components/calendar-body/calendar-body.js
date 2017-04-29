import React, { Component } from 'react';

import {List, ListItem} from 'material-ui/List';

import './calendar-body.css';

class CalendarBody extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dates: this.props.dates
    };
  }

  _renderCalendar(dates) {
    return dates.map((date) => {
      return (
        <List key={ date } className="weekday-table">
          <ListItem primaryText="8:00" onTouchTap={ () => this.props.openDialogCallback(date) } />
          <ListItem primaryText="9:00" onTouchTap={ () => this.props.openDialogCallback(date) } />
          <ListItem primaryText="10:00" onTouchTap={ () => this.props.openDialogCallback(date) } />
          <ListItem primaryText="11:00" onTouchTap={ () => this.props.openDialogCallback(date) } />
          <ListItem primaryText="12:00" onTouchTap={ () => this.props.openDialogCallback(date) } />
        </List>
      );
    });
  }

  render() {
    return (
      <div className="calendar-box">
        { this._renderCalendar(this.state.dates) }
      </div>
    );
  }
}

export default CalendarBody;
