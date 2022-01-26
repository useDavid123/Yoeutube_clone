import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-lazy-load-image-component/src/effects/blur.css'
import "./_base.scss"
import {Provider} from "react-redux"
import store from './Redux/store'
import {BrowserRouter as Router} from "react-router-dom"
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <Router>
    <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
