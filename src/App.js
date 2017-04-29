import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Requests from './modules/requests';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CalendarHeader from './components/calendar-header/calendar-header';
import CalendarBody from './components/calendar-body/calendar-body';
import CalendarDialog from './components/calendar-dialog/calendar-dialog';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';

import './App.css';

injectTapEventPlugin();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isDialogOpen: false,
      dates: ['2017-05-01', '2017-05-02', '2017-05-03', '2017-05-04', '2017-05-05'],
      activeStartTime: '',
      activeEndTime: ''
    };

    this.users = [];

  }

  componentWillMount = () => {
    Requests.getUsersAndEvents().then((response) => {
      console.log(response[0].data.users, response[1].data.events);
      this.users = response[0].data.users;
      this.setState({ isLoading: false });
    }).catch((error) => {
      console.log(error);
    });
  }

  _openDialog = (activeStartTime, activeEndTime) => {
    this.setState({ activeStartTime, activeEndTime });
    this.setState({ isDialogOpen: true });
  };

  _closeDialog = () => {
    this.setState({ isDialogOpen: false });
  };

  render() {

    return (
      <MuiThemeProvider>
        { this.state.isLoading ? (
          <CircularProgress />
        ) : (
          <Paper zDepth={ 2 }>
            <CalendarHeader
              dates={ this.state.dates } />
            <CalendarBody
              dates={ this.state.dates }
              openDialogCallback={ this._openDialog.bind(this) } />
            <CalendarDialog
              users={ this.users }
              closeDialogCallback={ this._closeDialog.bind(this) }
              isDialogOpen={ this.state.isDialogOpen }
              activeStartTime={ this.state.activeStartTime }
              activeEndTime={ this.state.activeEndTime } />
          </Paper>
        )}
      </MuiThemeProvider>
    );
  }
}

export default App;
