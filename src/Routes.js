import React, { Component } from 'react'
import Palette from "./Palette";
import { Route, Switch, NavLink } from "react-router-dom";
class Routes extends Component {
    render() {
        return (
          <div>
            <Switch>
              <Route
                exact
                path="/palette/:name"
                render={(routeParams) => {
                  return <Palette {...routeParams} />;
                }}
              />
              <Route path="/" render={() => <h1>WELCOME HOME</h1>} />;
            </Switch>
          </div>
        );
    }
}
export default Routes;