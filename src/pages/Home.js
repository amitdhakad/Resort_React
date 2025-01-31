import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";

import Services from "../Components/Services";
import FeaturedRooms from "../Components/FeaturedRooms";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero>
          <Banner
            title="luxurious Rooms"
            subTitle="deluxe rooms starting at $99"
          >
            <Link to="/rooms" className="btn-primary">
              rooms
            </Link>
          </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
      </React.Fragment>
    );
  }
}

export default Home;
