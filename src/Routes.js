import React, { Component } from 'react'
import { Route, Switch} from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import NewPalette from "./NewPalette";
import Color from "./Color";
import { generatePalette } from "./colorHelper";
import seedColors from "./seedColors";


class Routes extends Component {
  findPalette(id) {
    return seedColors.find((color) => color.id === id);
  }
    render() {
        return (
          <div>
            <Switch>
              <Route
                exact
                path="/palette/:name"
                render={(routeProps) => {
                  return (
                    <Palette
                      {...routeProps}
                      palette={generatePalette(
                        this.findPalette(routeProps.match.params.name)
                      )}
                    />
                  );
                }}
              />
              <Route exact path="/new-palette" render={() => <NewPalette />} />;
              <Route
                exact
                path="/"
                render={(routeProps) => <PaletteList {...routeProps} />}
              />
              <Route
                exact
                path="/palette/:paletteID/:colorID"
                render={(routeProps) => (
                  <Color
                    {...routeProps}
                    {...generatePalette(
                      this.findPalette(routeProps.match.params.paletteID)
                    )}
                  />
                )}
              />
            </Switch>
          </div>
        );
    }
}
export default Routes;