import React, { Component } from 'react'
import Slider from "rc-slider"
import { NavLink } from 'react-router-dom'
import {withStyles} from '@material-ui/styles'
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import "rc-slider/assets/index.css"
import NavBarStyles from "./styles/NavBarStyles";
class NavBar extends Component {
  constructor(props) {
    super(props);
      this.state = { format: 'hex'};
 }
  render() {
    const {classes} = this.props
    return (
      <nav className={classes.main}>
        <div className={classes.logo}>
          <NavLink exact to="/">
            colorify
          </NavLink>
        </div>
        {this.props.show && (
          <div className={classes.slider}>
            <p className="sliderTitle">Level : {this.props.degree}</p>
            <Slider
              defaultValue={this.props.degree}
              min={100}
              max={900}
              step={100}
              onAfterChange={this.props.changeDegree}
            />
          </div>
        )}
        <div className={classes.selectBox}>
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
export default withStyles(NavBarStyles)(NavBar)