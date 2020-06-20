
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import 'jquery';
import registerServiceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
