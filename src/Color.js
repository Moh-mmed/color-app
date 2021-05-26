import React, { Component } from 'react'
import Snackbar from "@material-ui/core/Snackbar";
import {withStyles} from "@material-ui/styles"
import NavBar from "./NavBar";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import ColorStyles from "./styles/ColorStyles";

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
    let shades = [];
    for (let shade in this.props.colors) {
      shades.push(
        this.props.colors[shade].filter((color) => color.id === id)[0]
      );
    }
    return shades.slice(1);
  }
  changeColorFormat(e) {
    this.setState({ format: e.target.value, open: true }, () => {
      setTimeout(() => this.setState({ open: false }), 1500);
    });
    }
    handleClick() {
  this.props.history.goBack();
    }
    render() {
      const { paletteName, emoji, classes, err } = this.props;
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
      <div className={classes.main}>
        <NavBar
          format={format}
          changeFormat={this.changeColorFormat}
          show={false}
        />
        <div className={classes.colors}>
          {shades}
          <div className={classes.goBack}>
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
        <PaletteFooter paletteName={paletteName} emoji={emoji} err={err} />
      </div>
    );
  }
}
export default withStyles(ColorStyles)(Color)