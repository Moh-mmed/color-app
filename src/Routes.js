import React, { Component } from 'react'
import { Route, Switch} from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import NewPalette from "./NewPalette";
import Color from "./Color";
import { generatePalette } from "./colorHelper";
import seedColors from "./seedColors";


class Routes extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = {
      palettes: savedPalettes || seedColors,
    };
    this.findPalette = this.findPalette.bind(this);
    this.saveNewPalette = this.saveNewPalette.bind(this);
  }
  findPalette(id) {
    return this.state.palettes.find((color) => color.id === id);
  }
  saveNewPalette(newPalette) {
      this.setState(
        { palettes: [...this.state.palettes, newPalette] },
        this.updateLocalStorage
      );
  }
  updateLocalStorage() {
window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes));
  }
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/palette/new-palette"
            render={(routeProps) => (
              <NewPalette
                saveNewPalette={this.saveNewPalette}
                palettes={this.state.palettes}
                {...routeProps}
              />
            )}
          />
          ;
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
          <Route
            exact
            path="/"
            render={(routeProps) => (
              <PaletteList {...routeProps} palettes={this.state.palettes} />
            )}
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