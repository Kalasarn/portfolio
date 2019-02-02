import React, { Component, Fragment } from "react";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import "./Css/App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <LandingPage />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
