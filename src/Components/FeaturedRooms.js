import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./loading";
import Room from "./Room";
import Title from "./Title";

class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms } = this.context;
    featuredRooms = featuredRooms.map(room => (
      <Room key={room.id} room={room} />
    ));
    //console.log(this.context);
    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : featuredRooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
