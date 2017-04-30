import React, { Component } from 'react';

import moment from 'moment';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class InfoDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      infoActiveStartTime: '',
      infoEventName: '',
      infoParticipants: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.infoActiveStartTime !== this.state.infoActiveStartTime) {
      this.setState({ infoActiveStartTime: nextProps.infoActiveStartTime });
    }
    if (nextProps.infoEventName !== this.state.infoEventName) {
      this.setState({ infoEventName: nextProps.infoEventName });
    }
    if (nextProps.infoParticipants !== this.state.infoParticipants) {
      let infoParticipants = [];
      nextProps.infoParticipants.forEach((participant) => {
        infoParticipants.push(participant.name);
      });
      this.setState({ infoParticipants });
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
        title={`Meeting scheduled on ${moment(this.state.infoActiveStartTime).format('LLLL')}`}
        actions={ actions }
        modal={ false }
        open={ this.props.isInfoDialogOpen }
        onRequestClose={ this.props.closeDialogCallback } >
        <p>{ `Event name: ${this.state.infoEventName}` }</p>
        <p>{ `Participants: ${this.state.infoParticipants.join(', ')}` }</p>
      </Dialog>
    );
  }
}

export default InfoDialog;
