import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Requests from './modules/requests';
import Socket from './modules/socket';

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
      activeEndTime: '',
      eventName: '',
      participants: []
    };

    this.users = [];
    this.events = [];

  }

  componentDidMount() {
    Socket.registerMessage('new event', (data) => {
      window.location.reload();
    });
    Socket.registerMessage('verify event', (data) => {
      const parsedData = JSON.parse(data);
      parsedData.starts_at *= 1000;
      parsedData.ends_at *= 1000;
      this._openDialog(parsedData.starts_at, parsedData.ends_at, parsedData.name, parsedData.users);
    });
  }

  componentWillMount = () => {
    Requests.getUsersAndEvents().then((response) => {
      this.users = response[0].data.users;
      this.events = response[1].data.events;
      for (let event of this.events) {
        event.starts_at *= 1000;
        event.ends_at *= 1000;
      }
      this.setState({ isLoading: false });
    }).catch((error) => {
      console.log(error);
    });
  }

  _openDialog = (activeStartTime, activeEndTime, eventName, participants) => {
    this.setState({ activeStartTime, activeEndTime, eventName, participants });
    this.setState({ isDialogOpen: true });
  };

  _closeDialog = () => {
    this.setState({ isDialogOpen: false });
  };

  render() {

    return (
      <MuiThemeProvider>
        { this.state.isLoading ? (
          <div className="wrapper">
            <CircularProgress className="progress" size={100} />
          </div>
        ) : (
          <div>
            <div className="app-title">Meetings Calendar</div>
            <Paper zDepth={ 2 }>
              <CalendarHeader
                dates={ this.state.dates } />
              <CalendarBody
                dates={ this.state.dates }
                events={ this.events }
                openDialogCallback={ this._openDialog.bind(this) } />
              <CalendarDialog
                users={ this.users }
                closeDialogCallback={ this._closeDialog.bind(this) }
                isDialogOpen={ this.state.isDialogOpen }
                activeStartTime={ this.state.activeStartTime }
                activeEndTime={ this.state.activeEndTime }
                eventName={ this.state.eventName }
                participants={ this.state.participants } />
            </Paper>
          </div>
        )}
      </MuiThemeProvider>
    );
  }
}

export default App;
