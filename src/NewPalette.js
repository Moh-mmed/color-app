import React, { Component } from 'react'
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { withStyles } from '@material-ui/styles';
import {ChromePicker} from 'react-color'
import { colors } from '@material-ui/core';
import useStyles from './styles/NewPaletteStyles'
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";



class NewPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      newColorName: "",
      currentColor: "teal",
      colors: ["yellow", "#e6e3e3"],
    };
    this.updateColor = this.updateColor.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
      this.state.colors.every(name => (
        name.toLowerCase() !== value.toLowerCase()
      ))
    });
    ValidatorForm.addValidationRule("isColorUnique", (value) => {
      this.state.colors.every(color => (
        color !== this.state.currentColor
      ))
    });
  }
  updateColor(newColor) {
    this.setState({ currentColor: newColor["hex"] });
  }
  addNewColor() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName,
    };
    this.setState({ colors: [...this.state.colors, newColor], newColorName:"" });
  }
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  handleChange(ev) {
    this.setState({ newColorName: ev.target.value });
  }
  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={
            (classes.appBar,
            {
              [classes.appBarShift]: open,
            })
          }
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              edge="start"
              className={(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Persistent drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Typography variant="h5" noWrap>
            Add New Palette
          </Typography>
          <div>
            <Button variant="contained" color="primary">
              Random Color
            </Button>
            <Button variant="contained" color="secondary">
              Clear Palette
            </Button>
          </div>
          <ChromePicker
            color={this.state.currentColor}
            onChangeComplete={this.changeColor}
          />
          <ValidatorForm onSubmit={this.addNewColor}>
            <TextValidator
              value={this.state.newColorName}
              onChange={this.handleChange}
              validators={["required", "isColorNameUnique", "isColorUnique"]}
              errorMessages={[
                "Enter a name",
                "Color name must be unique",
                "Color already used",
              ]}
            />
          </ValidatorForm>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
            style={{ backgroundColor: this.state.currentColor }}
            onClick={this.addNewColor}
          >
            Add Color
          </Button>
        </Drawer>
        <main
          className={
            (classes.content,
            {
              [classes.contentShift]: open,
            })
          }
        >
          <div className={classes.drawerHeader} />
          <ul>
            {this.state.colors.map((color) => (
              <li>{color}</li>
            ))}
          </ul>
        </main>
      </div>
    );
  }
}
export default withStyles(useStyles, {withTheme:true})(NewPalette);