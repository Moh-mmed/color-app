import React, { Component } from 'react'
import Snackbar from "@material-ui/core/Snackbar";
import ColorBox from './ColorBox'
import NavBar from "./NavBar";
import { generatePalette } from "./colorHelper";
import "./Palette.css";
import seedColors from './seedColors';
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
    const {colors,paletteName, emoji} = generatePalette(seedColors.find(
        (color) => color.id === this.props.match.params.name
    ))
    const { deg, format, open } = this.state
    const paletteColors = colors[deg].map((color) => (
      <ColorBox background={color[format]} name={color.name} key={color.id} />
    ));
    return (
      <div className="Palette">
        <NavBar
          degree={deg}
          format={format}
          changeDegree={this.changeColorDegree}
          changeFormat={this.changeColorFormat}
        />
        <div className="Palette-colors">{paletteColors}</div>
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
        <footer className="Palette-footer">
          {paletteName}
          <span className="emoji">
            <i className={emoji} aria-label="Germany Flag"></i>
          </span>
        </footer>
      </div>
    );
  }
}
export default  Palette 