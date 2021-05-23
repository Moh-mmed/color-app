import React, { Component } from 'react'
import Snackbar from "@material-ui/core/Snackbar";
import { withStyles } from "@material-ui/core/styles";
import ColorBox from './ColorBox'
import NavBar from "./NavBar";
import PaletteFooter from "./PaletteFooter";
import PaletteStyles from "./PaletteStyles";
// import { generatePalette } from "./colorHelper";
// import seedColors from './seedColors';
class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deg: 500,
      format: "hex",
      open:false
    };
    this.changeColorDegree = this.changeColorDegree.bind(this);
    this.changeColorFormat = this.changeColorFormat.bind(this);
  }
  changeColorDegree(newDeg) {
    this.setState({ deg: newDeg });
  }
  changeColorFormat(e) {
      this.setState({ format: e.target.value, open: true }, () => {
        setTimeout(() => this.setState({ open: false }),1500);
    });
  }
    render() {
  
    const {classes} = this.props  
    const {colors,paletteName, emoji,id} = this.props.palette
    const { deg, format, open } = this.state
    const paletteColors = colors[deg].map((color) => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        singleColor={false}
        moreURL={`/palette/${id}/${color.id}`}
      />
    ));
    return (
      <div className={classes.root}>
        <NavBar
          degree={deg}
          format={format}
          changeDegree={this.changeColorDegree}
          changeFormat={this.changeColorFormat}
          show={true}
        />
        <div className={classes.colors}>{paletteColors}</div>
        <Snackbar
          open={open}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          message={
            <span id="message-id">
              Format Changed To {format.toUpperCase()}
            </span>
          }
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          autoHideDuration={1500}
        />
        <PaletteFooter paletteName={paletteName} emoji={emoji}/>
      </div>
    );
  }
}
export default withStyles(PaletteStyles)(Palette);