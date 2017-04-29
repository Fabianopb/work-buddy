import React, { Component } from 'react';

import Requests from '../../modules/requests';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class CalendarDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: this.props.isDialogOpen,
      participants: [],
      activeStartTime: '',
      activeEndTime: ''
    };
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

  _menuItems = (participants) => {
    return this.props.users.map((user) => (
      <MenuItem
        key={ user.id }
        insetChildren={ true }
        checked={ participants && participants.includes(user.id) }
        value={ user.id }
        primaryText={ user.name }
      />
    ));
  }

  _handleParticipantsChange = (event, index, participants) => this.setState({ participants });

  _sendInvitation = () => {
    Requests.postInvitation(this.state.activeStartTime, this.state.activeEndTime, this.state.participants).then((response) => {
      console.log('invitation sent!', response);
      this.setState({ participants: [] });
      this.props.closeDialogCallback();
    }).catch((error) => {
      console.log(error.response);
    });
  }

  render() {

    const { participants } = this.state;

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
        onRequestClose={ this.props.closeDialogCallback }
      >
        <SelectField
          multiple={ true }
          hintText="Select participants"
          value={ participants }
          onChange={ this._handleParticipantsChange.bind(this) }
        >
          { this._menuItems(participants) }
        </SelectField>
      </Dialog>
    );
  }
}

export default CalendarDialog;
