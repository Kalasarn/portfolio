import React from "react";
import { List, ListItem, Typography } from "@material-ui/core";
import { Techniques } from "./Data";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  whiteText: {
    color: "white"
  },
  techDiv: {
    marginTop: "2vh",
    marginBottom: "2vh",
    float: "left",
    borderBottom: "solid",
    borderWidth: 2,
    borderBottomColor: "white"
  },
  listFormat: {
    columnCount: 3,
    columnGap: 2
  }
};

function Techs(props) {
  const { classes } = props;

  const techList = Techniques.map(tech => (
    <ListItem key={tech.id}>
      <Typography variant="h6" className={classes.whiteText}>
        {tech.title}
      </Typography>
    </ListItem>
  ));

  return (
    <div className={classes.techDiv}>
      <List className={classes.listFormat}>{techList}</List>
    </div>
  );
}

export default withStyles(styles)(Techs);
