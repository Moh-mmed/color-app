import React, { Component } from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles } from "@material-ui/core/styles";
import ColorBoxStyles from "./ColorBoxStyles";
class ColorBox extends Component {
    constructor(props) {
        super(props)
        this.state = { copied: false, showCopied:false }
        this.handleCopy = this.handleCopy.bind(this) 
    }
    handleCopy(){
        this.setState({ copied: true });
        setTimeout(() => {
          this.setState({ copied: false});
        }, 1100);
    }
    render() {
        const { classes, background, name } = this.props;
        return (
          <CopyToClipboard text={background} onCopy={this.handleCopy}>
            <div
              style={{ background /* assigning background to background*/ }}
              className={classes.root}
            >
              <div
                style={{ background }}
                className={`${classes.copiedOverlay} ${
                  this.state.copied && "copied"
                }`}
              />
              <div
                className={`${classes.copiedText} ${
                  this.state.copied && "copied"
                }`}
              >
                <h2>Copied</h2>
                <p>{this.props.background}</p>
              </div>
              <div className="Copy-container">
                <div className={classes.boxContent}>
                  <span>{name}</span>
                </div>
                <button className={classes.copyButton}>Copy</button>
              </div>
              <span className={classes.more}>More</span>
            </div>
          </CopyToClipboard>
        );
    }
}
export default withStyles(ColorBoxStyles)(ColorBox);