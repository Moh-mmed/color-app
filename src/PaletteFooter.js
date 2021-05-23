import React from 'react-dom'
import { withStyles } from "@material-ui/core/styles";
import PaletteFooterStyles from "./PaletteFooterStyles";
function PaletteFooter(props) {
    const {paletteName,emoji,classes} = props
    return (
         <footer className={classes.footer}>
          {paletteName}
          <span>
            <i className={emoji} aria-label="Germany Flag"></i>
          </span>
        </footer>
    )
}
export default withStyles(PaletteFooterStyles)(PaletteFooter)