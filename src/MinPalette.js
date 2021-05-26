import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import MinPaletteStyles from "./styles/MinPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";
function MinPalette(props) {
  const { classes, palette, openDialog, openPalette } = props;
  function handleDelete() {
    openDialog(palette.id)
  }

    return (
      <div className={classes.main} onClick={() => { openPalette(palette.id) }}>
        <div className={classes.delete}>
          <DeleteIcon
            className={classes.deleteIcon}
            onClick={(e) => {
              e.stopPropagation();
              handleDelete();
            }}
            style={{ transition: "all 0.4s ease-in-out" }}
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
          {palette.err ? (
            <i className={palette.emoji} aria-label="Germany Flag"></i>
          ) : (
            palette.emoji
          )}
        </div>
      </div>
    );
}

export default withStyles(MinPaletteStyles)(MinPalette);
