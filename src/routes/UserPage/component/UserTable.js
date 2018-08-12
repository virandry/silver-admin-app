import React, { Component } from 'react';
import { Grid, Icon, Label } from 'semantic-ui-react';

export default class UserTable extends Component {
  render() {
    return (
      <Grid padded>
        <Grid.Column computer={1} verticalAlign="middle" textAlign="center">
          <Label>ID</Label>
        </Grid.Column>
        <Grid.Column computer={3} verticalAlign="middle" textAlign="center">
          <Label as="button" className="c-pointer">
            <Icon name="sort amount down" />
            Name
          </Label>
        </Grid.Column>
        <Grid.Column computer={3} verticalAlign="middle" textAlign="center">
          <Label as="button" className="c-pointer">
            <Icon name="sort amount down" />
            Email
          </Label>
        </Grid.Column>
        <Grid.Column computer={2} verticalAlign="middle" textAlign="center">
          <Label as="button" className="c-pointer">
            <Icon name="sort amount down" />
            Company
          </Label>
        </Grid.Column>
        <Grid.Column computer={2} verticalAlign="middle" textAlign="center">
          <Label as="button" className="c-pointer">
            <Icon name="sort amount down" />
            Created on
          </Label>
        </Grid.Column>
        <Grid.Column computer={1} verticalAlign="middle" textAlign="center">
          <Label>Active</Label>
        </Grid.Column>
        <Grid.Column computer={1} verticalAlign="middle" textAlign="center">
          <Label>Signup Method</Label>
        </Grid.Column>
        <Grid.Column computer={3} verticalAlign="middle" textAlign="center">
          <Label>Actions</Label>
        </Grid.Column>
      </Grid>
    );
  }
}
