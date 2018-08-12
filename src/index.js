import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './App';
import config from './assets/config';
import registerServiceWorker from './assets/registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

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
