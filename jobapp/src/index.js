import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';


import App from './components/App';
import JobList from './components/JobList';
import Skills from './components/Skills';


import { Router, Route, IndexRoute } from 'react-router';
import { history, store } from './store/configureStore';
import { Provider } from 'react-redux';

const router = (
          <Provider store={store}>
            <Router history={history}>
              <Route path="/" component={App}>
                <IndexRoute component={JobList}></IndexRoute>
                <Route path="/view/:jobId" component={Skills}></Route>
              </Route>
            </Router>
          </Provider>
    )

ReactDOM.render(router, document.getElementById('root'));




