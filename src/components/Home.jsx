import React, { Component } from "react";
import web from "../images/img1.jpg";
import Common from "./Common";

class Home extends Component {
  render() {
    return (
      <Common
        site="Melodias;"
        name="Grow your skills with"
        des=" We are the team of developer making websites"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    );
  }
}

export default Home;
