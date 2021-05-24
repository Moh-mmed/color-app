import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import MinPaletteStyles from "./styles/MinPaletteStyles";

function MinPalette(props) {
    const { classes ,palette } = props
   
    return (
      // <Link className={classes.paletteLink} to={`/palette/${palette.id}`}>
      <div className={classes.main} onClick={props.handleClick}>
        <div className={classes.colors}>
          {palette.colors.map((color) => (
            <div
              style={{
                background: color.color,
              }}
            />
          ))}
        </div>
        <div className={classes.footer}>
          <span>{palette.paletteName}</span>
          <i className={palette.emoji}></i>
        </div>
      </div>
      // </Link>
    );
}

export default withStyles(MinPaletteStyles)(MinPalette);
