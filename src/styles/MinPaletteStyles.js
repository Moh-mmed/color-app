const MinPaletteStyles = {
  main: {
    position: "relative",
    padding: "9px",
    margin: "15px",
    backgroundColor: "#ffffff",
    borderRadius: "4px",
    height: "170px",
    cursor: "pointer",
  },
  delete: {
    position: "absolute",
    top: "10px",
    right: "8px",
    "& svg": {
      fontSize: "1.4rem",
      color: "#494747",
    },
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)",
    },
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