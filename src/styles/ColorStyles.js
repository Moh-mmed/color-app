import sizes from "./sizes";
const ColorStyles = {
  main: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
  },
  colors: {
    height: "100%",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(5, 20%)",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
    },
  },
  goBack: {
    backgroundColor: "#9f9fa0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& span": {
      background: "rgba(255, 255, 255, 0.3)",
      color: "white",
      padding: "5px",
      borderRadius: "5px",
      fontSize: "1.5rem",
      cursor: "pointer",
    },
    [sizes.down("md")]: {
      height: "126px",
    },
    [sizes.down("xs")]: {
      height: "63.3px",
      fontSize: ".8rem",
    },
  },
};
export default ColorStyles;
