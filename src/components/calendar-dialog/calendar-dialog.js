import React, { Component } from 'react';

import Requests from '../../modules/requests';
import moment from 'moment';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';

class CalendarDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: this.props.isDialogOpen,
      participants: this.props.participants,
      activeStartTime: this.props.activeStartTime,
      activeEndTime: this.props.activeEndTime,
      eventName: this.props.eventName
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
    if (nextProps.eventName !== this.state.eventName) {
      this.setState({ eventName: nextProps.eventName });
    }
    if (nextProps.participants !== this.state.participants) {
      this.setState({ participants: nextProps.participants });
    }
  }

  _appendParticipant = (participant) => {
    return () => this.participants.push(participant);
  }

  _renderUsers = () => {
    return this.props.users.map((user) => {
      return (
        <Checkbox
          key={ user.id }
          label={ user.name }
          onCheck={ this._appendParticipant(user.id) }
          defaultChecked={ this.state.participants ? this.state.participants.indexOf(user.id) >= 0 : false } />
      );
    });
  }

  _sendInvitation = () => {
    this.participants = this.state.participants || this.participants;
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
        title={`Schedule a meeting on ${moment(this.state.activeStartTime).format('LLLL')}`}
        actions={ actions }
        modal={ false }
        open={ this.state.isDialogOpen }
        onRequestClose={ this.props.closeDialogCallback } >
        <TextField
          hintText="Event Name"
          defaultValue={ this.state.eventName }
          ref={ (TextField) => this.eventName = TextField } />
        { this._renderUsers(this.props.users) }
      </Dialog>
    );
  }
}

export default CalendarDialog;
