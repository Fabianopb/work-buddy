import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class CalendarDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: this.props.isDialogOpen,
      participants: []
    };

    this.names = [
      'Bank',
      'Fabiano',
      'Khan',
      'Mariko',
      'Napat',
      'Tom'
    ];

    this._menuItems = (participants) => {
      return this.names.map((name) => (
        <MenuItem
          key={ name }
          insetChildren={ true }
          checked={ participants && participants.includes(name) }
          value={ name }
          primaryText={ name }
        />
      ));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isDialogOpen !== this.state.isDialogOpen) {
      this.setState({ isDialogOpen: nextProps.isDialogOpen });
    }
  }

  _handleParticipantsChange = (event, index, participants) => this.setState({ participants });

  render() {

    const { participants } = this.state;

    const actions = [
      <FlatButton
        label="Send invitation"
        primary={ true }
        keyboardFocused={ false }
        onTouchTap={ this.props.closeDialogCallback }
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
          onChange={ this._handleParticipantsChange }
        >
          { this._menuItems(participants) }
        </SelectField>
      </Dialog>
    );
  }
}

export default CalendarDialog;
