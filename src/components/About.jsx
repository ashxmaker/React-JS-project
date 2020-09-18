import React, { Component } from "react";
import Common from "./Common";
import web from "../images/about.png";

class About extends Component {
  render() {
    return (
      <div>
        <Common
          name="About US"
          des="Websites can be used in various fashions: a personal website, a corporate website for a company, a government website, an organization website, etc. Websites can be the work of an individual, a business or other organization, and are typically dedicated to a particular topic or purpose. Any website can contain a hyperlink to any other website, so the distinction between individual sites, as perceived by the user, can be blurred."
          imgsrc={web}
          visit="/contact"
          btname="Contact Now"
        />
      </div>
    );
  }
}

export default About;
