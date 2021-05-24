const NavBarStyles = {
main: {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "40px",
  backgroundColor: "#f7f7f7",
},
logo: {
  height: "100%",
  lineHeight: "40px",
  textTransform: "uppercase",
  fontFamily: "'Rubik', sans-serif",
  fontSize: "2rem",
  letterSpacing: "-1px",
  fontWeight: 600,
  padding: "0 10px",
  backgroundColor: "#e5e5e5",
  "& a":{
   textDecoration: "none",
   color: "#000000c9",
 }
},
slider: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "35px",
  padding: "3px 0",
  margin: "0 20px",
  marginLeft: "auto",
  width: "460px",
  "& .sliderTitle":{
   width: "20%",
   marginRight: "2%",
 },
 "& .rc-slider":{
   display: "inline-block",
   height: "20px",
   width: "78%",
 },
 "& .rc-slider-track":{
   backgroundColor: "#8473de",
   height: "8px",
 },
 "& .rc-slider-rail":{
   height: "8px",
 },
 "& .rc-slider-handle , .rc-slider-handle:active , .rc-slider-handle:focus , .rc-slider-handle:hover":{
   backgroundColor: "#57c5f7",
   outline: "none",
   border: "1.5px solid #57c5f7",
   boxShadow: "none",
   width: "20px",
   height: "20px",
   marginTop: "-5px",
 },
},
 selectBox:{
  width: "245px",
  textAlign: "end",
  margin: "0 5px",
}
}
export default NavBarStyles