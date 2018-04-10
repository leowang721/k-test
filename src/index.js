import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import reducers from './reducers';
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
