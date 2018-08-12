import React, { Component } from 'react';
import { Tabs } from 'gestalt';
import { Grid } from 'semantic-ui-react';

export default class Nav extends Component {
  state = {
    activeTabIndex: 0,
    tabs: [
      {
        text: 'Dashboard',
        href: '#',
      },
      {
        text: 'Users',
        href: '#',
      },
      {
        text: 'Contracts',
        href: '#',
      },
    ],
  };

  handleChange = ({ activeTabIndex, event }) => {
    console.log('event: ', event);
    this.setState({ activeTabIndex });
  };

  render() {
    return (
      <Grid padded className="admin nav">
        <Grid.Column floated="right" computer={8} verticalAlign="middle" float="right">
          <Tabs tabs={this.state.tabs} activeTabIndex={this.state.activeTabIndex} onChange={this.handleChange} />
        </Grid.Column>
      </Grid>
    );
  }
}
