import sizes from "./sizes";
const NavBarStyles = {
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "40px",
    backgroundColor: "#f7f7f7",
    [sizes.down("xs")]: {
      flexDirection: "column",
      height: "103px",
      alignItems: "normal",
    },
  },
  logo: {
    height: "100%",
    width: "160px",
    lineHeight: "40px",
    textTransform: "uppercase",
    fontFamily: "'Rubik', sans-serif",
    fontSize: "2rem",
    letterSpacing: "-1px",
    fontWeight: 600,
    padding: "0 10px",
    backgroundColor: "#e5e5e5",
    "& a": {
      textDecoration: "none",
      color: "#000000c9",
    },
    [sizes.down("xs")]: {
      width: "100%",
      fontSize: "1rem",
      padding: "0 4px",
    },
  },
  slider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "35px",
    padding: "3px 0",
    marginLeft: "auto",
    width: "50%",
    [sizes.down("xs")]: {
      width: "90%",
      margin: "5px 5% 0",
    },
    "& .sliderTitle": {
      width: "18%",
      marginRight: "2%",
      [sizes.down("md")]: {
        width: "30%",
      },
      [sizes.down("sm")]: {
        width: "49%",
        display: "none",
      },
      [sizes.down("xs")]: {
        display: "block",
        width: "23%",
        fontSize: "0.9rem",
      },
    },
    "& .rc-slider": {
      display: "inline-block",
      height: "20px",
      width: "78%",
    },
    "& .rc-slider-track": {
      backgroundColor: "#8473de",
      height: "8px",
    },
    "& .rc-slider-rail": {
      height: "8px",
    },
    "& .rc-slider-handle , .rc-slider-handle:active , .rc-slider-handle:focus , .rc-slider-handle:hover":
      {
        backgroundColor: "#57c5f7",
        outline: "none",
        border: "1.5px solid #57c5f7",
        boxShadow: "none",
        width: "20px",
        height: "20px",
        marginTop: "-5px",
      },
  },
  selectBox: {
    width: "245px",
    textAlign: "end",
    margin: "0 5px",
    [sizes.down("xs")]: {
      width: "100%",
      textAlign: "center",
    },
  }
};
export default NavBarStyles;
