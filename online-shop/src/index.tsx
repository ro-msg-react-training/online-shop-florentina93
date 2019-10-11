import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './styles/sass/mystyles.scss';

import App from './app/App';
import { ROOT } from './constants';

render((
    <Router>
        <Route path={`${ROOT}`} component={App} />
    </Router>
), document.getElementById('root'));

