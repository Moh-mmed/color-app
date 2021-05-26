import chroma from "chroma-js";
import sizes from "./sizes";
const ColorBoxStyles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    marginBottom: "-4px",
    "&:hover button": {
      opacity: 1,
      transition: "0.4s",
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "20%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%",
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "5%",
    },
  },
  rootSingle: {
    position: "relative",
    cursor: "pointer",
    "&:hover button": {
      opacity: 1,
      transition: "0.4s",
    },
    [sizes.down("md")]: {
      height: "126px",
    },
    [sizes.down("xs")]: {
      height: "63.3px"
    },
  },
  copyButton: {
    width: "100px",
    height: "32px",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: "-16px",
    marginLeft: "-50px",
    textAlign: "center",
    outline: "none",
    background: (props) =>
      chroma(props.background).luminance() <= 0.5
        ? "rgba(255, 255, 255, 0.3)"
        : "rgb(255 255 255 / 66%)",
    color: (props) =>
      chroma(props.background).luminance() <= 0.5 ? "white" : "black",
    fontSize: "1rem",
    lineHeight: "32px",
    textTransform: "uppercase",
    border: "none",
    borderRadius: "5px",
    opacity: 0,
    cursor: "pointer",
    [sizes.down("xs")]: {
      width: "80px",
      height: "25px",
      lineHeight: "25px",
      marginTop: "-12.5px",
    },
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: 0,
    bottom: 0,
    padding: "8px",
    color: "black",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "12px",
    "& span": {
      color: (props) =>
        chroma(props.background).luminance() <= 0.5 ? "white" : "black",
      fontSize: ".75rem",
    },
  },
  more: {
    display: "inline-block",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: 0,
    bottom: 0,
    color: (props) =>
      chroma(props.background).luminance() <= 0.5 ? "white" : "black",
    width: "52px",
    height: "26px",
    fontSize: "0.7rem",
    fontWeight: 600,
    textAlign: "center",
    lineHeight: "26px",
    textTransform: "uppercase",
    letterSpacing: "0.7px",
    cursor: "pointer",
    [sizes.down("xs")]: {
      width: "45px",
      height: "22px",
      lineHeight: "22px",
    },
  },
  copiedOverlay: {
    opacity: 0,
    zIndex: 0,
    height: "100%",
    width: "100%",
    transition: "transform .7s ease-in-out",
    transform: "scale(0.01)",
    "&.copied": {
      opacity: 1,
      transform: "scale(50)",
      zIndex: 3,
      position: "absolute",
    },
  },
  copiedText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    opacity: 0,
    cursor: "default",
    color: (props) =>
      chroma(props.background).luminance() <= 0.5 ? "white" : "#6b6969",
    transform: "scale(0.1)",
    "&.copied": {
      opacity: 1,
      transform: "scale(3)",
      zIndex: 4,
      transition: "all 0.2s ease-in-out 0.2s",
    },
    "& h2": {
      width: "100%",
      padding: "5px",
      backgroundColor: "#ffffff48",
      textAlign: "center",
      textTransform: "uppercase",
      lineHeight: "30px",
      [sizes.down("xs")]: {
        fontSize: "1rem",
      },
    },
    "& p": {
      marginTop: "5px",
      fontSize: "0.5em",
    },
  },
};
export default ColorBoxStyles;
