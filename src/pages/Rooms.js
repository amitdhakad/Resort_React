import React, { Component } from "react";
import Hero from "../Components/Hero";
class Rooms extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Hero hero="roomsHero" children="Rooms" />;
  }
}

export default Rooms;
