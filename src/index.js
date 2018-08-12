import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import config from './assets/config';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import 'gestalt/dist/gestalt.css';
import './assets/custom.scss';

console.log('current adminApi: ', config);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
