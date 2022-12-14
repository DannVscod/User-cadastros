import React, { Component } from "react";
import React from "react";
import { Switch, Route, Redirect } from "react-router";

import UserCrud from "../Componets/Users/UserCrud";

export default (props) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/users" component={UserCrud} />
    <Redirect from="*" to="/" />
  </Switch>
);
