import React, { Component } from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";
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
        const { background, name } = this.props;
        return (
          <CopyToClipboard text={background} onCopy={this.handleCopy}>
            <div
              style={{ background /* assigning background to background*/ }}
              className="ColorBox"
            >
              <div
                style={{ background }}
                className={`Copied-overlay ${this.state.copied && "copied"}`}
              />
              <div
                className={`Copied-text ${this.state.copied && "copied"}`}
              >
                        <h2>Copied</h2>
                        <p>{ this.props.background}</p>
              </div>
              <div className="Copy-container">
                <div className="Box-content">
                  <span>{name}</span>
                </div>
                <button className="Copy-button">Copy</button>
              </div>
              <span className="See-more">More</span>
            </div>
          </CopyToClipboard>
        );
    }
}
export default ColorBox