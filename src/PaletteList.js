import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import DialogTitle from "@material-ui/core/DialogTitle";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { withStyles } from "@material-ui/core/styles";
import MinPalette from "./MinPalette";
import PaletteListStyles from "./styles/PaletteListStyles";
class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDeleteDialog: false,
      deletingID: "",
    };
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.openPalette = this.openPalette.bind(this);
  }
  openPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  openDialog(id) {
    this.setState({ openDeleteDialog: true, deletingID: id });
  }
  closeDialog() {
    this.setState({ openDeleteDialog: false, deletingID: "" });
  }
  handleDelete() {
    this.props.deletePalette(this.state.deletingID);
    this.closeDialog();
  }
  render() {
    const { classes, palettes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.head}>
            <h1>Colorful Palettes</h1>
            <Link className={classes.newPaletteLink} to="/palette/new-palette">
              Create a palette
            </Link>
          </div>
          <TransitionGroup className={classes.palettes}>
            {palettes.map((palette) => (
              <CSSTransition key={palette.id} classNames="fade" timeout={600}>
                <MinPalette
                  palette={palette}
                  openPalette={this.openPalette}
                  openDialog={this.openDialog}
                  key={palette.id}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={this.state.openDeleteDialog}
          aria-labelledby="delete-dialog-title"
          onClose={this.closeDialog}
        >
          <DialogTitle id="delete-dialog-title">
            Do You Want To Remove This Palette ?
          </DialogTitle>
          <List>
            <ListItem button onClick={this.handleDelete}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: red[200], color: red[800] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Remove" />
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: blue[200], color: blue[800] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel" />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(PaletteListStyles)(PaletteList);