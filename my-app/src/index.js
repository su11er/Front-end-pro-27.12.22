import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import weatherReducer from './weatherReducer';
import Weather from './Weather';


const rootReducer = combineReducers({
  weather: weatherReducer
});


const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Weather />
  </Provider>,
  document.getElementById('root')
);