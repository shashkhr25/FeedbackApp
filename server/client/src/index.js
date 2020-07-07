import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import reducThunk from 'redux-thunk'; 

import App from './components/App';
import reducers from './reducers';

import axios from 'axios';
window.axios = axios;


const store = createStore(reducers, {}, applyMiddleware(reducThunk));

ReactDOM.render(<Provider store = {store}><App /> </Provider>, document.querySelector('#root') );

