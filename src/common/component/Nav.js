import React, { Component } from 'react';
import { Tabs } from 'gestalt';
import { Grid } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: this.firstLoadRoute(),
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
  }

  firstLoadRoute = () => {
    const pathname = this.props.history.location.pathname;
    console.log(pathname);
    if (pathname === '/dashboard') {
      return 0;
    } else if (pathname === '/users') {
      return 1;
    } else if (pathname === '/contracts') {
      return 2;
    }
    return 0;
  };

  handleChange = ({ activeTabIndex, event }) => {
    console.log('event: ', event);
    this.setState({ activeTabIndex }, () => {
      const tab = this.state.activeTabIndex;
      if (tab === 0) {
        this.props.history.push('/dashboard');
      } else if (tab === 1) {
        this.props.history.push('/users');
      } else if (tab === 2) {
        this.props.history.push('/contracts');
      }
    });
  };

  render() {
    return (
      <Grid padded className="admin nav">
        <Grid.Column floated="right" computer={8} verticalAlign="middle">
          <Tabs tabs={this.state.tabs} activeTabIndex={this.state.activeTabIndex} onChange={this.handleChange} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default withRouter(Nav);
