import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Landing from '../Pages/Landing';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
  </Switch>
);

export default Routes;
