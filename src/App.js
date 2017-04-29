import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';

import './App.css';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div className="calendar-title">
            <div className="weekday-title">Mon</div>
            <div className="weekday-title">Tue</div>
            <div className="weekday-title">Wed</div>
            <div className="weekday-title">Thu</div>
            <div className="weekday-title">Fri</div>
          </div>
            <div className="calendar-box">
              <List className="weekday-table">
                <ListItem primaryText="8:00" />
                <ListItem primaryText="9:00" />
                <ListItem primaryText="10:00" />
                <ListItem primaryText="11:00" />
                <ListItem primaryText="12:00" />
              </List>
              <List className="weekday-table">
                <ListItem primaryText="8:00" />
                <ListItem primaryText="9:00" />
                <ListItem primaryText="10:00" />
                <ListItem primaryText="11:00" />
                <ListItem primaryText="12:00" />
              </List>
              <List className="weekday-table">
                <ListItem primaryText="8:00" />
                <ListItem primaryText="9:00" />
                <ListItem primaryText="10:00" />
                <ListItem primaryText="11:00" />
                <ListItem primaryText="12:00" />
              </List>
              <List className="weekday-table">
                <ListItem primaryText="8:00" />
                <ListItem primaryText="9:00" />
                <ListItem primaryText="10:00" />
                <ListItem primaryText="11:00" />
                <ListItem primaryText="12:00" />
              </List>
              <List className="weekday-table">
                <ListItem primaryText="8:00" />
                <ListItem primaryText="9:00" />
                <ListItem primaryText="10:00" />
                <ListItem primaryText="11:00" />
                <ListItem primaryText="12:00" />
              </List>
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
