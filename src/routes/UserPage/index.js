import React, { Component } from 'react';
import Header from '../../common/component/Header';
import { Container } from 'semantic-ui-react';
import UserTable from './component/UserTable';

export default class UserPage extends Component {
  render() {
    return (
      <Container fluid>
        <Header />
        <UserTable />
      </Container>
    );
  }
}
