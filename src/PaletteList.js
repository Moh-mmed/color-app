import React, { Component } from 'react'
import Palette from "./Palette";
import { Link} from "react-router-dom";
import seedColors from "./seedColors";
import "./PaletteList.css";
class PaletteList extends Component {
    render() {
        const palettes = seedColors.map((palette) => (
          <Link to={`/palette/${palette.id}`}>
            <div className="palette">
              <div className="colors">
                {palette.colors.map((color) => (
                  <div
                    className="color"
                    style={{
                      background: color.color,
                    }}
                  />
                ))}
              </div>
              <div className="color-footer">
                <span>{palette.paletteName}</span>
                <i className={palette.emoji}></i>
              </div>
            </div>
          </Link>
        ));
    return (
      <div className="Palette-list">
        <div className="Palette-list-container">
          <div className="head">
            <h1>Colorful Palettes</h1>
            <span>Create a palette</span>
          </div>
          <div className="Palettes">{palettes}</div>
        </div>
      </div>
    );
  }
}
export default PaletteList;