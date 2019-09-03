import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import Title from "../Components/Title";
import { RoomContext } from "../context";
import Loading from "../Components/loading";
import Room from "../Components/Room";
import RoomContainer from "../Components/RoomContainer";

class Rooms extends Component {
  static contextType = RoomContext;
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { loading, rooms } = this.context;
    rooms = rooms.map(room => <Room key={room.id} room={room} />);
    return (
      <React.Fragment>
        <Hero hero="roomsHero">
          <Banner title="Ours Rooms">
            <Link to="/" className="btn-primary">
              Return Home
            </Link>
          </Banner>
        </Hero>
        <RoomContainer />
        <section className="featured-rooms">
          <Title title="Featured Rooms" />
          <div className="featured-rooms-center">
            {loading ? <Loading /> : rooms}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Rooms;
