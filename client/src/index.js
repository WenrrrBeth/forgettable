import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import App from './App';
import reducers from "./reducers";

// Creates a Redux store that holds the state tree. 
// Call dispatch() to change the data in the store
// applyMiddleware() Creates a store enhancer that applies middleware to the dispatch method of the Redux store.
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
