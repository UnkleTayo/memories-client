import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleWare, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import reducers from './reducers';

const store = createStore(reducers, compose(applyMiddleWare(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);
