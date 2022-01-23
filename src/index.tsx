import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import reportWebVitals from './reportWebVitals'

import Provider from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from './utils/history.util';
import App from './App/App'
import { createStore, combineReducers } from "redux";

let reducers = combineReducers({
  reducers
});

const store = createStore(reducers);

function AppWithReduxContext() {

    return (
      <Provider store={store}>

        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
        
      </Provider>
      
    )
  
}
  
ReactDOM.render(<AppWithReduxContext />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()