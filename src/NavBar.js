import React, { Component } from 'react'
import Slider from "rc-slider"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import "rc-slider/assets/index.css"
import "./NavBar.css"
class NavBar extends Component {
  constructor(props) {
    super(props);
      this.state = { format: 'hex' };
 }
  render() {
    return (
      <nav className="NavBar">
        <div className="Logo">colorify</div>
        <div className="Slider-container">
          <p className="slider-title">Level : {this.props.degree}</p>
          <Slider
            defaultValue={this.props.degree}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.props.changeDegree}
          />
        </div>
        <div className="select-box">
          <Select
            defaultValue={this.state.format}
            onChange={this.props.changeFormat}
          >
            <MenuItem value="hex">HEX - ex: #fefefe</MenuItem>
            <MenuItem value="rgb">RGB - ex: rgb(26,26,26)</MenuItem>
            <MenuItem value="rgba">RGBA - ex: rgba(26,26,26,0.3)</MenuItem>
          </Select>
        </div>
      </nav>
    );
  }
}
export default NavBar