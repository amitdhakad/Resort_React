import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";

class Home extends Component {
  render() {
    return (
      <Hero>
        <Banner title="luxurious Rooms" subTitle="deluxe rooms starting at $99">
          <Link to="/rooms" className="btn-primary">
            rooms
          </Link>
        </Banner>
      </Hero>
    );
  }
}

export default Home;
