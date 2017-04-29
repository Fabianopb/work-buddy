import React, { Component } from 'react';

import Requests from '../../modules/requests';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';

class CalendarDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: this.props.isDialogOpen,
      participants: [],
      activeStartTime: '',
      activeEndTime: ''
    };
    this.participants = [];
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isDialogOpen !== this.state.isDialogOpen) {
      this.setState({ isDialogOpen: nextProps.isDialogOpen });
    }
    if (nextProps.activeStartTime !== this.state.activeStartTime) {
      this.setState({ activeStartTime: nextProps.activeStartTime });
    }
    if (nextProps.activeEndTime !== this.state.activeEndTime) {
      this.setState({ activeEndTime: nextProps.activeEndTime });
    }
  }

  _appendParticipant = (participant) => {
    return () => this.participants.push(participant);
  }

  _renderUsers = () => {
    return this.props.users.map((user) => {
      return (
        <Checkbox key={ user.id } label={ user.name } onCheck={ this._appendParticipant(user.id) } />
      );
    });
  }

  _sendInvitation = () => {
    if (this.participants.length === 0) {
      console.log('List of participants is empty!');
      this.props.closeDialogCallback();
      return null;
    }
    Requests.postInvitation(this.state.activeStartTime, this.state.activeEndTime, this.participants, this.eventName.input.value)
      .then((response) => {
        console.log('invitation sent!', response);
        this.participants = [];
        this.props.closeDialogCallback();
        window.location.reload();
      }).catch((error) => {
        console.log(error);
        this.props.closeDialogCallback();
      });
  }

  render() {

    const actions = [
      <FlatButton
        label="Send invitation"
        primary={ true }
        keyboardFocused={ false }
        onTouchTap={ this._sendInvitation.bind(this) }
      />,
    ];

    return (
      <Dialog
        title="Schedule a meeting"
        actions={ actions }
        modal={ false }
        open={ this.state.isDialogOpen }
        onRequestClose={ this.props.closeDialogCallback } >
        <TextField
          hintText="Event Name"
          ref={ (TextField) => this.eventName = TextField } />
        { this._renderUsers(this.props.users) }
      </Dialog>
    );
  }
}

export default CalendarDialog;
