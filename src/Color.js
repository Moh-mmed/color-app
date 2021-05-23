import React, { Component } from 'react'
import Snackbar from "@material-ui/core/Snackbar";
import { generatePalette } from "./colorHelper";
import NavBar from "./NavBar";
import ColorBox from "./ColorBox";
import seedColors from "./seedColors";
import "./Color.css";

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
        format: "hex",
        open:false
    };
    this.params = this.props.match.params;
    this.shades = this.gatherShades(this.params.colorID);
    this.changeColorFormat = this.changeColorFormat.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }
  gatherShades(id) {
    const palette = generatePalette(
      seedColors.find((color) => color.id === this.params.paletteID)
    );
    let shades = [];
    for (let shade in palette.colors) {
      shades.push(palette.colors[shade].filter((color) => color.id === id)[0]);
    }
    return shades.slice(1);
  }
  changeColorFormat(e) {
    this.setState({ format: e.target.value, open: true }, () => {
      setTimeout(() => this.setState({ open: false }), 1500);
    });
    }
    handleClick() {
        console.log(this.props.history.goBack());
    }
    render() {
      const {format,open} = this.state
    const shades = this.shades.map((color) => (
      <ColorBox
        key={color.id}
        background={color[format]}
        name={color.name}
        singleColor={true}
      />
    ));
    console.log(shades);
    return (
      <div className="Color-container">
        <NavBar
          format={format}
          changeFormat={this.changeColorFormat}
          show={false}
        />
        <div className="colors">
          {shades}
          <div className="go-back">
            <span onClick={this.handleClick}>GoBack</span>
          </div>
        </div>
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
      </div>
    );
  }
}
export default Color