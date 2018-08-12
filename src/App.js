import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import UserPage from './routes/UserPage';
import DashboardPage from './routes/DashboardPage';
import ContractPage from './routes/ContractPage';
import Nav from './common/component/Nav';

class App extends Component {
  render() {
    return (
      <Container fluid className="app">
        <Nav />
        <Switch>
          <Route path="/dashboard" render={props => <DashboardPage {...props} />} />
          <Route path="/users" render={props => <UserPage {...props} />} />
          <Route path="/contracts" render={props => <ContractPage {...props} />} />
        </Switch>
      </Container>
    );
  }
}

export default App;
