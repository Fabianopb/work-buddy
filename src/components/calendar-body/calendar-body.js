import React, { Component } from 'react';

import {List, ListItem} from 'material-ui/List';

import './calendar-body.css';

class CalendarBody extends Component {

  render() {
    return (
      <div className="calendar-box">
        <List className="weekday-table">
          <ListItem primaryText="8:00" onTouchTap={ this.props.openDialogCallback } />
          <ListItem primaryText="9:00" onTouchTap={ this.props.openDialogCallback } />
          <ListItem primaryText="10:00" onTouchTap={ this.props.openDialogCallback } />
          <ListItem primaryText="11:00" onTouchTap={ this.props.openDialogCallback } />
          <ListItem primaryText="12:00" onTouchTap={ this.props.openDialogCallback } />
        </List>
        <List className="weekday-table">
          <ListItem primaryText="8:00" onTouchTap={ this.props.openDialogCallback } />
          <ListItem primaryText="9:00" onTouchTap={ this.props.openDialogCallback } />
          <ListItem primaryText="10:00" onTouchTap={ this.props.openDialogCallback } />
          <ListItem primaryText="11:00" onTouchTap={ this.props.openDialogCallback } />
          <ListItem primaryText="12:00" onTouchTap={ this.props.openDialogCallback } />
        </List>
        <List className="weekday-table">
          <ListItem primaryText="8:00" onTouchTap={ this.props.openDialogCallback } />
          <ListItem primaryText="9:00" onTouchTap={ this.props.openDialogCallback } />
          <ListItem primaryText="10:00" onTouchTap={ this.props.openDialogCallback } />
          <ListItem primaryText="11:00" onTouchTap={ this.props.openDialogCallback } />
          <ListItem primaryText="12:00" onTouchTap={ this.props.openDialogCallback } />
        </List>
        <List className="weekday-table">
          <ListItem primaryText="8:00" onTouchTap={ this.props.openDialogCallback } />
          <ListItem primaryText="9:00" onTouchTap={ this.props.openDialogCallback } />
          <ListItem primaryText="10:00" onTouchTap={ this.props.openDialogCallback } />
          <ListItem primaryText="11:00" onTouchTap={ this.props.openDialogCallback } />
          <ListItem primaryText="12:00" onTouchTap={ this.props.openDialogCallback } />
        </List>
        <List className="weekday-table">
          <ListItem primaryText="8:00" onTouchTap={ this.props.openDialogCallback } />
          <ListItem primaryText="9:00" onTouchTap={ this.props.openDialogCallback } />
          <ListItem primaryText="10:00" onTouchTap={ this.props.openDialogCallback } />
          <ListItem primaryText="11:00" onTouchTap={ this.props.openDialogCallback } />
          <ListItem primaryText="12:00" onTouchTap={ this.props.openDialogCallback } />
        </List>
      </div>
    );
  }
}

export default CalendarBody;
