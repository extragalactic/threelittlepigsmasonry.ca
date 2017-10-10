import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import MainPage from './MainPage';
import ServicePageMain from './ServicePageMain';

export default () => {
  return (
    <Route path={'/'} component={App}>
      <Route exact path="/home" component={MainPage} />
      <Route path="/services/:type" component={ServicePageMain} />
      <Route component={MainPage} />
    </Route>
  );
};

