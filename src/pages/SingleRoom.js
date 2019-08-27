import React, { Component } from "react";
import defaultImg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";

import { RoomContext } from "../context";

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultImg
    };
  }
  //  componentDidMount() {}

  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log(room, "room");
    return (
      <React.Fragment>
        <Hero>
          <Banner
            title="luxurious Rooms"
            subTitle="deluxe rooms starting at $99"
          >
            <Link to="/" className="btn-primary">
              Home
            </Link>
          </Banner>
        </Hero>
      </React.Fragment>
    );
  }
}

export default SingleRoom;
