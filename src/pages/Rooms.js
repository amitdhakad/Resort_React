import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
class Rooms extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Hero>
        <Banner title="Ours Rooms">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
    );
  }
}

export default Rooms;
