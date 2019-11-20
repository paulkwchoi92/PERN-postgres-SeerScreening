import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Switch, Route } from "react-router-dom";
import landing_container from "./user/landing_container";
import verification_container from "./user/verification_container";
import confirmation_container from "./user/confirmation_container";
const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={landing_container} />
        <Route exact path="/validate" component={verification_container} />
        <Route exact path="/confirmation" component={confirmation_container} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default Root;
