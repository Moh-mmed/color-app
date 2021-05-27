import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";
import NewPalette from "./components/NewPalette";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Page from './components/Page'
import Color from "./components/Color";
import { generatePalette } from "./Helpers/colorHelper";
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
                    <Page>
                      <NewPalette
                        saveNewPalette={this.saveNewPalette}
                        palettes={this.state.palettes}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />

                <Route
                  exact
                  path="/palette/:name"
                  render={(routeProps) => {
                    return (
                      <Page>
                        <Palette
                          {...routeProps}
                          palette={generatePalette(
                            this.findPalette(routeProps.match.params.name)
                          )}
                        />
                      </Page>
                    );
                  }}
                />
                <Route
                  exact
                  path="/"
                  render={(routeProps) => (
                    <Page>
                      <PaletteList
                        {...routeProps}
                        palettes={this.state.palettes}
                        deletePalette={this.deletePalette}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/palette/:paletteID/:colorID"
                  render={(routeProps) => (
                    <Page>
                      <Color
                        {...routeProps}
                        {...generatePalette(
                          this.findPalette(routeProps.match.params.paletteID)
                        )}
                      />
                    </Page>
                  )}
                />
                <Route
       
                  render={(routeProps) => (
                    <Page>
                      <PaletteList
                        {...routeProps}
                        palettes={this.state.palettes}
                        deletePalette={this.deletePalette}
                      />
                    </Page>
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
