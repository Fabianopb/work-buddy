import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import CalendarHeader from './components/calendar-header/calendar-header';
import CalendarBody from './components/calendar-body/calendar-body';
import CalendarDialog from './components/calendar-dialog/calendar-dialog';

import './App.css';

injectTapEventPlugin();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false,
      dates: [
        '2017-05-01',
        '2017-05-02',
        '2017-05-03',
        '2017-05-04',
        '2017-05-05',
      ],
      activeDate: ''
    };

  }

  _openDialog = (activeDate) => {
    this.setState({ activeDate });
    this.setState({ isDialogOpen: true });
  };

  _closeDialog = () => {
    this.setState({ isDialogOpen: false });
  };

  render() {

    return (
      <MuiThemeProvider>
        <div>
          <CalendarHeader />
          <CalendarBody
            dates={ this.state.dates }
            openDialogCallback={ this._openDialog.bind(this) }
          />
          <CalendarDialog
            closeDialogCallback={ this._closeDialog.bind(this) }
            isDialogOpen={ this.state.isDialogOpen }
            activeDate={ this.state.activeDate }
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
