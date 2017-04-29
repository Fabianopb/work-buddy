import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {List, ListItem} from 'material-ui/List';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';

import './App.css';

injectTapEventPlugin();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false
    };
  }

  _openDialog = () => {
    this.setState({ isDialogOpen: true });
  };

  _closeDialog = () => {
    this.setState({ isDialogOpen: false });
  };

  render() {

    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this._closeDialog}
      />,
    ];

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
                <ListItem primaryText="8:00" onTouchTap={ this._openDialog } />
                <ListItem primaryText="9:00" onTouchTap={ this._openDialog } />
                <ListItem primaryText="10:00" onTouchTap={ this._openDialog } />
                <ListItem primaryText="11:00" onTouchTap={ this._openDialog } />
                <ListItem primaryText="12:00" onTouchTap={ this._openDialog } />
              </List>
              <List className="weekday-table">
                <ListItem primaryText="8:00" onTouchTap={ this._openDialog } />
                <ListItem primaryText="9:00" onTouchTap={ this._openDialog } />
                <ListItem primaryText="10:00" onTouchTap={ this._openDialog } />
                <ListItem primaryText="11:00" onTouchTap={ this._openDialog } />
                <ListItem primaryText="12:00" onTouchTap={ this._openDialog } />
              </List>
              <List className="weekday-table">
                <ListItem primaryText="8:00" onTouchTap={ this._openDialog } />
                <ListItem primaryText="9:00" onTouchTap={ this._openDialog } />
                <ListItem primaryText="10:00" onTouchTap={ this._openDialog } />
                <ListItem primaryText="11:00" onTouchTap={ this._openDialog } />
                <ListItem primaryText="12:00" onTouchTap={ this._openDialog } />
              </List>
              <List className="weekday-table">
                <ListItem primaryText="8:00" onTouchTap={ this._openDialog } />
                <ListItem primaryText="9:00" onTouchTap={ this._openDialog } />
                <ListItem primaryText="10:00" onTouchTap={ this._openDialog } />
                <ListItem primaryText="11:00" onTouchTap={ this._openDialog } />
                <ListItem primaryText="12:00" onTouchTap={ this._openDialog } />
              </List>
              <List className="weekday-table">
                <ListItem primaryText="8:00" onTouchTap={ this._openDialog } />
                <ListItem primaryText="9:00" onTouchTap={ this._openDialog } />
                <ListItem primaryText="10:00" onTouchTap={ this._openDialog } />
                <ListItem primaryText="11:00" onTouchTap={ this._openDialog } />
                <ListItem primaryText="12:00" onTouchTap={ this._openDialog } />
              </List>
            </div>
            <Dialog
              title="Dialog With Date Picker"
              actions={ actions }
              modal={ false }
              open={ this.state.isDialogOpen }
              onRequestClose={ this._closeDialog }
            >
              Open a Date Picker dialog from within a dialog.
              <DatePicker hintText="Date Picker" />
            </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
