import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import MinPaletteStyles from "./styles/MinPaletteStyles";

function MinPalette(props) {
    const { classes ,palette } = props
  // const emojiChecker = () => {
  //    return palette.err ? <i className={palette.emoji}></i> : palette.emoji;
  //  }
    return (
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
          {palette.err ? <i className={palette.emoji}></i> : palette.emoji}
        </div>
      </div>
    );
}

export default withStyles(MinPaletteStyles)(MinPalette);
