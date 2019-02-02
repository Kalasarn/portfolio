import React from "react";
import { Grid, Typography, Button, Collapse, Slide } from "@material-ui/core";
import ProjectList from "./ProjectList";
import Techs from "./Techs";
import { withStyles } from "@material-ui/core/styles";
import ScrollableAnchor from "react-scrollable-anchor";
import { goToAnchor } from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";
import { removeHash } from "react-scrollable-anchor";
import bg from "./Images/bg.jpeg";

const styles = {
  whiteText: {
    color: "white"
  },
  whiteTextTop: {
    color: "white",
    marginTop: "50vh"
  },
  aboutMeTextTop: {
    color: "white",
    marginTop: "5vh",
    marginBottom: 15
  },
  aboutMeText: {
    color: "white",
    marginTop: "2vh"
  },
  landingDiv: {
    height: "100vh",
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    paddingLeft: "20vw"
  },
  buttonDiv: {
    marginTop: 15,
    borderBottom: "solid",
    borderWidth: 2,
    borderBottomColor: "white",
    padding: 10,
    display: "inline-block"
  },
  aboutMeDiv: {
    backgroundColor: "#243b55",
    paddingLeft: "10vw",
    paddingRight: "10vw"
  },
  smallBorderDiv: {
    borderBottom: "solid",
    borderWidth: 2,
    borderBottomColor: "white",
    padding: 10,
    display: "inline-block"
  }
};

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutMe: false
    };
  }

  handleCollapse = () => {
    if (this.state.aboutMe === false) goToAnchor("aboutMeSection", false);

    this.setState(state => ({ aboutMe: !state.aboutMe }));
  };

  render() {
    configureAnchors({
      offset: -40,
      scrollDuration: 3000,
      keepLastAnchorHash: false
    });

    if (this.state.aboutMe === false) {
      removeHash();
    }

    return (
      <Grid container>
        <Grid item xs={12} className={this.props.classes.landingDiv}>
          <Typography variant="h2" className={this.props.classes.whiteTextTop}>
            Portfolio
          </Typography>
          <Typography variant="h4" className={this.props.classes.whiteText}>
            Niklas Johansson
          </Typography>
          <Typography variant="h4" className={this.props.classes.whiteText}>
            Systemvetare
          </Typography>

          <div className={this.props.classes.buttonDiv}>
            <Button variant="text" onClick={this.handleCollapse}>
              <Typography
                variant="body1"
                className={this.props.classes.whiteText}
              >
                Om Mig.
              </Typography>
            </Button>
          </div>
        </Grid>

        <Collapse
          in={this.state.aboutMe}
          timeout={2500}
          className={this.props.classes.aboutMeDiv}
        >
          <Slide in={this.state.aboutMe} direction="right" timeout={1500}>
            <ScrollableAnchor id={"aboutMeSection"}>
              <Grid item xs={12} className={this.props.classes.aboutMeDiv}>
                <Typography
                  variant="h3"
                  className={this.props.classes.aboutMeTextTop}
                >
                  Utbildning
                </Typography>

                <Typography
                  variant="h6"
                  className={this.props.classes.aboutMeText}
                >
                  Tre års utbildning på Örebro Universitet inom det
                  systemvetenskapligaprogrammet. Under min tre åriga utbildning
                  har jag fått både teoretiska kunskaper och praktiska
                  kunskaper. De teoretiska innefattade främst olika
                  arbetsmetoder som Scrum / XP, Kravhantering och
                  interaktionsdesign. Det praktiska arbetet handlade om olika
                  projekt som skulle byggas med hjälp av olika tekniker.
                </Typography>

                <Grid container>
                  <Grid item xs={12} sm={12}>
                    <Typography
                      variant="h3"
                      className={this.props.classes.aboutMeTextTop}
                    >
                      Praktiska Projekt
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <ProjectList />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography
                      variant="h3"
                      className={this.props.classes.aboutMeTextTop}
                    >
                      Vem är jag?
                    </Typography>
                    <div className={this.props.classes.smallBorderDiv}>
                      <Typography
                        variant="h6"
                        className={this.props.classes.whiteText}
                      >
                        28 Årig systemvetare från Örebro.
                      </Typography>
                    </div>
                    <Typography
                      variant="h6"
                      className={this.props.classes.aboutMeText}
                    >
                      Dator entusiast / Gamer / Utvecklare som introducerades
                      till IT-världen vid 5 års ålder. Spenderade större delen
                      av tonåren famför datorn där jag fastnade för den
                      tävlingsinriktade delen som senare tids spel medfört. Med
                      hjälp av ett par väldigt skickliga vänner och en
                      kontinuerligt utvecklande problemlösnings / analyserande
                      förmågade lyckades jag översätta detta intresse till att
                      vara den 70e högst rankade spelaren(10e högsta svenska
                      spelare) i ett spel och till att vara inom den första
                      percentilen i ett par andra.
                      <br />
                      <br />
                      På senare tid, i samband med flytt hemifrån / sambo / jobb
                      har detta intresse åtsidosats. 2016 började jag på det
                      systemvetenskapliga programmet på Örebro Universitet och
                      jag har de senaste tre åren jobbat på att översätta min
                      problemlösnings / analyserande förmåga till utveckling.
                      <br />
                      <br />
                      Idag jobbar jag kvar på det företaget som jag jobbat på
                      under tiden jag gick i skolan. Fritiden spenderas antingen
                      på gymmet eller framför datorn där jag har valt att
                      fullfölja webutvecklings delen från skolan. Just nu håller
                      jag på med ReactJS som denna sida är byggd i med hjälp av
                      Material UI och jag skulle vilja fortsätta utvecklas inom
                      denna delen för att slutligen bli en full-stack
                      utvecklare.
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Typography
                      variant="h3"
                      className={this.props.classes.aboutMeTextTop}
                    >
                      Vad har jag jobbat med?
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Techs />
                  </Grid>
                </Grid>
              </Grid>
            </ScrollableAnchor>
          </Slide>
        </Collapse>
      </Grid>
    );
  }
}

export default withStyles(styles)(LandingPage);
