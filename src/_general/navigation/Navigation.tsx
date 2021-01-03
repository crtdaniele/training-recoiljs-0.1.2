import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "../../App";
import Todos from "../../todos/components/Todos";

const Navigation = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <App />
      </Route>
      <Route path='/todos' exact>
        <Todos />
      </Route>
    </Switch>
  );
};

export default Navigation;
