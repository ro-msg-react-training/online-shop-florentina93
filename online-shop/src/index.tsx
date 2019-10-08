import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles/sass/mystyles.scss';

import App from './app/App';

render((
    <Router>
        <App />
    </Router>
), document.getElementById('root'));

