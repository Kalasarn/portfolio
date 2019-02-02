import React from "react";
import { Grid, Typography, Link } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = {
  footerDiv: {
    textAlign: "center",
    backgroundColor: "#243b55",
    padding: 25,
    width: "100%"
  },
  whiteText: {
    color: "white"
  }
};

function Footer(props) {
  const { classes } = props;
  return (
    <Grid container>
      <Grid item xs={12} className={classes.footerDiv}>
        <Link underline="none" href="https://www.facebook.com/Nikjoh91">
          <Typography variant="h6" className={classes.whiteText}>
            Facebook
          </Typography>
        </Link>
        <Link
          underline="none"
          href="https://www.linkedin.com/in/niklas-johansson-854941179/"
        >
          <Typography variant="h6" className={classes.whiteText}>
            LinkedIn
          </Typography>
        </Link>
        <Typography variant="h6" className={classes.whiteText}>
          njoh@live.se
        </Typography>
        <Typography variant="h6" className={classes.whiteText}>
          +46 076 460 631
        </Typography>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Footer);
