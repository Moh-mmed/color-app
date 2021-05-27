import React from 'react-dom'
import { withStyles } from "@material-ui/core/styles";
import PaletteFooterStyles from "../styles/PaletteFooterStyles";
function PaletteFooter(props) {
    const {paletteName,emoji,classes,err} = props
    return (
      <footer className={classes.footer}>
        {paletteName}
        <span>
          {err ? <i className={emoji} aria-label="Germany Flag"></i> : emoji}
        </span>
      </footer>
    );
}
export default withStyles(PaletteFooterStyles)(PaletteFooter)