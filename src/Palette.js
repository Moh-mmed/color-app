import React, { Component } from 'react'
import ColorBox from './ColorBox'
import NavBar from "./NavBar";
import "./Palette.css";
class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deg: 500,
      format: "hex",
    };
    this.changeColorDegree = this.changeColorDegree.bind(this);
    this.changeColorFormat = this.changeColorFormat.bind(this);
  }
  changeColorDegree(newDeg) {
    this.setState({ deg: newDeg });
  }
  changeColorFormat(e) {
    this.setState({ format: e.target.value });
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
      </div>
    );
  }
}
export default  Palette 