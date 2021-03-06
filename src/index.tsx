import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import reportWebVitals from './reportWebVitals';
import { Router, Route, Switch } from 'react-router-dom';

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

import './index.css';
import Login from './components/Auth/Login';
import NotFound from './components/NotFound';
import Register from './components/Auth/Register';
import LoadingComponent from './components/LoadingComponent';

export const history = createBrowserHistory();

ReactDOM.render(
  <>
    <ToastContainer position="bottom-right" />
    <Router history={ history }>
      <Switch>

        <Route exact path="/" component={App} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact component={NotFound} />
        <Route exact path="/loading" component={LoadingComponent}/>
        
      </Switch>
    </Router>,
  </>,
  document.getElementById('root')
  
);

reportWebVitals();
