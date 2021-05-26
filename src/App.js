import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import NewPalette from "./NewPalette";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./styles/PageStyling.css";
import Color from "./Color";
import { generatePalette } from "./colorHelper";
import seedColors from "./seedColors";

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = {
      palettes: savedPalettes || seedColors,
    };
    this.findPalette = this.findPalette.bind(this);
    this.saveNewPalette = this.saveNewPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
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
  deletePalette(id) {
    this.setState(
      (st) => ({
        palettes: st.palettes.filter((palette) => palette.id !== id),
      }),
      this.updateLocalStorage
    );
  }
  updateLocalStorage() {
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }
  render() {
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="page" timeout={300}>
              <Switch location={location}>
                <Route
                  exact
                  path="/palette/new-palette"
                  render={(routeProps) => (
                    <div className="page">
                      <NewPalette
                        saveNewPalette={this.saveNewPalette}
                        palettes={this.state.palettes}
                        {...routeProps}
                      />
                    </div>
                  )}
                />
                ;
                <Route
                  exact
                  path="/palette/:name"
                  render={(routeProps) => {
                    return (
                      <div className="page">
                        <Palette
                          {...routeProps}
                          palette={generatePalette(
                            this.findPalette(routeProps.match.params.name)
                          )}
                        />
                      </div>
                    );
                  }}
                />
                <Route
                  exact
                  path="/"
                          render={(routeProps) => (
                    <div className="page">
                    <PaletteList
                      {...routeProps}
                      palettes={this.state.palettes}
                      deletePalette={this.deletePalette}
                    />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/palette/:paletteID/:colorID"
                                render={(routeProps) => (
                    <div className="page">
                    <Color
                      {...routeProps}
                      {...generatePalette(
                        this.findPalette(routeProps.match.params.paletteID)
                      )}
                    />
                    </div>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}
export default App;
