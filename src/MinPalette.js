import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import MinPaletteStyles from "./styles/MinPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";
function MinPalette(props) {
  const { classes, palette, deletePalette } = props;
  function handleDelete() {
    deletePalette(palette.id)
  }
    return (
      <div className={classes.main} onClick={props.handleClick}>
        <div className={classes.delete}>
          <DeleteIcon
            className={classes.deleteIcon}
            onClick={(e) => { e.stopPropagation();handleDelete()}}
          />
        </div>
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
