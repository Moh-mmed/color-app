import React, { Component } from 'react'
import { Route, Switch} from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import NewPalette from "./NewPalette";
import Color from "./Color";
class Routes extends Component {
    render() {
        return (
          <div>
            <Switch>
              <Route
                exact path="/palette/:name"
                render={(routeParams) => {
                  return <Palette {...routeParams} />;
                }}
              />
              <Route exact path="/new-palette" render={() => <NewPalette />} />;
              <Route
                exact path="/"
                render={(routeProps) => <PaletteList {...routeProps} />}
              />
              <Route
                exact path="/palette/:paletteID/:colorID"
                render={(routeProps) => <Color {...routeProps} />}
              />
            </Switch>
          </div>
        );
    }
}
export default Routes;