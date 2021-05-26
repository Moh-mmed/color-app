const MinPaletteStyles = {
  main: {
    position: "relative",
    padding: "9px",
    margin: "15px",
    backgroundColor: "#ffffff",
    borderRadius: "4px",
    height: "170px",
    cursor: "pointer",
    "&:hover svg": {
      color: "white",
      opacity: 1,
    },
  },
  deleteIcon: {
    position: "absolute",
    top: "0px",
    right: "0px",
    backgroundColor: "#ff3e3e",
    padding: "4px",
    borderTopRightRadius: "4px",
    opacity: 0,
    fontSize: "1.8rem",
    color: "#494747",
  },
  paletteLink: {
    textDecoration: "none",
    color: "inherit",
  },
  colors: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "0",
    height: "80%",
    borderRadius: " 4px",
    overflow: "hidden",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "0.9rem",
    margin: "5px 2px 0 2px",
    height: "20%",
  },
};
export default MinPaletteStyles;