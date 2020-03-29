import React from "react";
import { Switch } from 'react-router-dom';
import { Route } from "react-router-dom";
import MainTemplate from './templates/MainTemplate';
import Home from './pages/Home';
import NotFound from './pages/NotFound';


const Routes = () => {
  return(
    <MainTemplate>
      <Switch>
        <Route path={`/`} exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </MainTemplate>
  );
}

export default Routes;
