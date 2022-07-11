import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import App from './App';
import reducers from './reducers';


const store=createStore(reducers,applyMiddleware(thunkMiddleware));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

      <App />
    </Provider>
  </React.StrictMode>
);


