/* React and Babel Import */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import{ Router, browserHistory } from 'react-router';

/* CSS Imports */
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

/* Src Imports */
import configureStore from './store/configureStore'; // eslint-disable-line import/default
import {loadAdverseEffects} from './actions/adverseEffectsActions';
import routes from './routes';
 


const store = configureStore();
store.dispatch(loadAdverseEffects());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);

