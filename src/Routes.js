import React, { Component } from 'react'
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import NewPalette from "./NewPalette";
import { Route, Switch} from "react-router-dom";
class Routes extends Component {
    render() {
        return (
          <div>
            <Switch>
              <Route
                path="/palette/:name"
                render={(routeParams) => {
                  return <Palette {...routeParams} />;
                }}
              />
              <Route path="/new-palette" render={() => <NewPalette />} />;
              <Route
                path="/"
                render={(routeProps) => <PaletteList {...routeProps} />}
              />
              ;
            </Switch>
          </div>
        );
    }
}
export default Routes;