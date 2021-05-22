import React, { Component } from 'react'
import Snackbar from "@material-ui/core/Snackbar";
import ColorBox from './ColorBox'
import NavBar from "./NavBar";
import "./Palette.css";
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
    const colors = this.props.palette.colors[this.state.deg].map((color) => (
      <ColorBox background={color[this.state.format]} name={color.name} />
    ));
    return (
      <div className="Palette">
        <NavBar
          degree={this.state.deg}
          format={this.state.format}
          changeDegree={this.changeColorDegree}
          changeFormat={this.changeColorFormat}
        />
        <div className="Palette-colors">{colors}</div>
        <Snackbar
          open={this.state.open}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                message={<span id="message-id">Format Changed To { this.state.format.toUpperCase()}</span>}
        ContentProps={{
            "aria-describedby":"message-id"
        }}
          autoHideDuration={1500}
        />
      </div>
    );
  }
}
export default  Palette 