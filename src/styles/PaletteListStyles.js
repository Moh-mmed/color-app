import sizes from "./sizes";
import backGround from"./background.svg"
const PaletteListStyles = {
  root: {
    "@global": {// when you need to grap a class use global
      ".fade-exit": {
        opacity: 1
      },
      ".fade-exit-active": {
        opacity: 0,
        transition: "opacity 0.6s ease-in-out"
      }
    },
    display: "flex",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "30px 0",
    backgroundColor: "#1c0f2f",
    backgroundImage: `url(${backGround})`,
  },  
  container: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    overflowWrap: "normal",
    [sizes.down("sm")]: {
      width: "90%",
    },
  },
  head: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    color: "white",
    padding: "10px 20px",
    margin: "10px 0 30px",
    "& h1": {
      fontSize: "2.5rem",
    },
    [sizes.down("md")]: {
      margin: "8px 0 25px",
      "& h1": {
        fontSize: "2rem",
      },
    },
  },
  newPaletteLink: {
    marginBottom: "-22px",
    color: "white",
  },
  palettes: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 25%)",
    padding: "15px",
    margin: "0 auto",
    width: "100%",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)",
      width: "75%",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
    },
  },
};
export default PaletteListStyles;
