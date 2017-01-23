import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AdverseEffectsPage from './components/adverse_effects/AdverseEffectsPage';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />     
    <Route path="adverse-effects" component={AdverseEffectsPage} />   
  </Route>
);