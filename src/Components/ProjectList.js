import React, { Fragment } from "react";
import {
  Typography,
  ListItem,
  List,
  ListItemSecondaryAction,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  IconButton
} from "@material-ui/core";
import { Projects } from "./Data";
import OpenInNewIcon from "@material-ui/icons/OpenInNewSharp";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  whiteText: {
    color: "white"
  },
  dialogDiv: {
    height: "100%",
    backgroundColor: "#243b55",
    color: "white"
  },
  projectDiv: {
    marginTop: "2vh",
    width: "20vw",
    minWidth: 300,
    float: "left"
  }
};

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      dialogHeader: "",
      dialogText: ""
    };
  }

  openDialog = project => {
    this.setState({
      dialogOpen: !this.state.dialogOpen,
      dialogHeader: project.title,
      dialogText: project.description
    });
  };

  closeDialog = () => {
    this.setState({ dialogOpen: !this.state.dialogOpen });
  };

  render() {
    let webProjects = Projects.map(project => {
      if (project.category === "Web")
        return (
          <ListItem key={project.id}>
            <Typography variant="h6" className={this.props.classes.whiteText}>
              {project.title}
            </Typography>
            <ListItemSecondaryAction>
              <IconButton
                className={this.props.classes.whiteText}
                onClick={this.openDialog.bind(this, project)}
              >
                <OpenInNewIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      else return "";
    });

    const nonWebProjects = Projects.map(project => {
      if (project.category !== "Web")
        return (
          <ListItem key={project.id}>
            <Typography variant="h6" className={this.props.classes.whiteText}>
              {project.title}
            </Typography>
            <ListItemSecondaryAction>
              <IconButton
                className={this.props.classes.whiteText}
                onClick={this.openDialog.bind(this, project)}
              >
                <OpenInNewIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      else return "";
    });

    return (
      <Fragment>
        <div className={this.props.classes.projectDiv}>
          <List
            subheader={
              <Typography variant="h5" className={this.props.classes.whiteText}>
                Hemsida
              </Typography>
            }
          >
            {webProjects}
          </List>
        </div>
        <div className={this.props.classes.projectDiv}>
          <List
            subheader={
              <Typography variant="h5" className={this.props.classes.whiteText}>
                Övrigt
              </Typography>
            }
          >
            {nonWebProjects}
          </List>
        </div>

        <Dialog open={this.state.dialogOpen} onClose={this.closeDialog}>
          <div className={this.props.classes.dialogDiv}>
            <DialogTitle>
              <Typography variant="h4" className={this.props.classes.whiteText}>
                {this.state.dialogHeader}
              </Typography>
            </DialogTitle>
            <DialogContent>
              <DialogContentText className={this.props.classes.whiteText}>
                {this.state.dialogText}
              </DialogContentText>
            </DialogContent>
          </div>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(styles)(ProjectList);
