import React, {PureComponent}from 'react'
import { withStyles } from '@material-ui/core/styles';
import MinPaletteStyles from "../styles/MinPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";
class MinPalette extends PureComponent {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
    this.openPalette = this.openPalette.bind(this);
    }
  handleDelete() {
    this.props.openDialog(this.props.palette.id)
  }
  openPalette() {
  this.props.openPalette(this.props.palette.id)
}
  render() {
    const { classes, palette } = this.props;
    console.log(palette.paletteName)
  
    return (
      <div className={classes.main} onClick={this.openPalette}>
        <div className={classes.delete}>
          <DeleteIcon
            className={classes.deleteIcon}
            onClick={(e) => {
              e.stopPropagation();
              this.handleDelete();
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
}

export default withStyles(MinPaletteStyles)(MinPalette);
