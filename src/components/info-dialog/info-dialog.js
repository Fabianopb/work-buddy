import React, { Component } from 'react';

import moment from 'moment';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class InfoDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeStartTime: '',
      eventName: '',
      participants: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeStartTime !== this.state.activeStartTime) {
      this.setState({ activeStartTime: nextProps.activeStartTime });
    }
    if (nextProps.eventName !== this.state.eventName) {
      this.setState({ eventName: nextProps.eventName });
    }
    if (nextProps.participants !== this.state.participants) {
      let participants = [];
      nextProps.participants.forEach((participant) => {
        participants.push(participant.name);
      });
      this.setState({ participants });
    }
  }

  render() {

    const actions = [
      <FlatButton
        label="Ok"
        primary={ true }
        keyboardFocused={ false }
        onTouchTap={ this.props.closeInfoDialogCallback }
      />,
    ];

    return (
      <Dialog
        title={`Meeting scheduled on ${moment(this.state.activeStartTime).format('LLLL')}`}
        actions={ actions }
        modal={ false }
        open={ this.props.isInfoDialogOpen }
        onRequestClose={ this.props.closeDialogCallback } >
        <p>{ `Event name: ${this.state.eventName}` }</p>
        <p>{ `Participants: ${this.state.participants.join(', ')}` }</p>
      </Dialog>
    );
  }
}

export default InfoDialog;
