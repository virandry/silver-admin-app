import React, { Component } from 'react';
import { Box, IconButton, SearchField } from 'gestalt';
import { Button, Grid, Icon } from 'semantic-ui-react';
import logo from '../../assets/logo.svg';

export default class Header extends Component {
  state = {
    value: '',
  };

  render() {
    return (
      <div className="admin header">
        <Grid padded>
          <Grid.Column floated="left" mobile={16} tablet={16} computer={8}>
            <Box color="white" shape="rounded" padding={3} display="flex" direction="row" alignItems="center">
              <Box paddingX={2}>
                <img src={logo} className="logo" alt="logo" />
              </Box>
              <Box flex="grow" paddingX={2}>
                <SearchField
                  accessibilityLabel="Demo Search Field"
                  id="searchField"
                  onChange={({ value }) => this.setState({ value })}
                  placeholder="Search and explore"
                  value={this.state.value}
                />
              </Box>
              <Box paddingX={2}>
                <IconButton accessibilityLabel="Profile" icon="person" size="md" />
              </Box>
              <Box paddingX={2}>
                <Button circular basic icon>
                  <Icon name="log out" />
                </Button>
              </Box>
            </Box>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
