const ColorStyles = {
  main: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
  },
  colors: {
    height: "calc(100% - 68px)",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(5, 20%)",
  },
  goBack: {
    backgroundColor: "#9f9fa0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& span": {
      backgroundColor: "#e6e6e6",
      padding: "5px",
      borderRadius: "5px",
      fontSize: "1.5rem",
      fontWeight: 600,
      cursor: "pointer",
    },
  },
};
export default ColorStyles