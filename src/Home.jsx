import React from "react";
import { NavLink } from "react-router-dom";
import home from "./imeges/home.svg";
import Common from "./Common";

function Home() {
  return (
    <Common
      name=" Grow your business with"
      img={home}
      visit="/service"
      btName="Get Started"
    />
  );
}

export default Home;
