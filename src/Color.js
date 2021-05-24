import React, { Component } from 'react'
import Snackbar from "@material-ui/core/Snackbar";
import NavBar from "./NavBar";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import "./Color.css";

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
        format: "hex",
        open:false
    };
    this.shades = this.gatherShades(this.props.match.params.colorID);
    this.changeColorFormat = this.changeColorFormat.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }
  gatherShades(id) {
    const palette = this.props.palette
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
      const { paletteName , emoji} = this.props.palette;
      const {format,open} = this.state
    const shades = this.shades.map((color) => (
      <ColorBox
        key={color.name}
        background={color[format]}
        name={color.name}
        singleColor={true}
      />
    ));

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
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
export default Color