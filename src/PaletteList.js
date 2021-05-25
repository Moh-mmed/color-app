import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import MinPalette from "./MinPalette";
import PaletteListStyles from "./styles/PaletteListStyles";
class PaletteList extends Component {
   goToPalette(id) {
      this.props.history.push(`/palette/${id}`)
    }
    render() {
        const { classes } = this.props
        const palettes = this.props.palettes.map((palette) => (
          <MinPalette palette={palette} handleClick={()=>this.goToPalette(palette.id)}/>
        ));
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.head}>
            <h1>Colorful Palettes</h1>
            <Link className={classes.newPaletteLink} to="/palette/new-palette">
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