import React from "react";
import Common from "./Common";
import about from "./imeges/about.svg";

function About() {
  return (
    <>
      <Common
        name="Welcome to About page"
        img={about}
        visit="/contact"
        btName="Contact Now"
      />
    </>
  );
}

export default About;
