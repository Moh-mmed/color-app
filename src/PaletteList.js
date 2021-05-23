import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import MinPalette from "./MinPalette";
import seedColors from "./seedColors";
import PaletteListStyles from "./PaletteListStyles";
class PaletteList extends Component {
    render() {
        const { classes } = this.props
        console.log(classes.root)
        const palettes = seedColors.map((palette) => (
            <MinPalette palette={palette}/>
        ));
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.head}>
            <h1>Colorful Palettes</h1>
            <Link className={classes.newPaletteLink} to="/new-palette">
              Create a palette
            </Link>
          </div>
          <div className={classes.palettes}>{palettes}</div>
        </div>
      </div>
    );
  }
}
export default withStyles(PaletteListStyles)(PaletteList);