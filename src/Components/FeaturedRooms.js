import React, { Component } from "react";
import { RoomContext } from "../context";

class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { greeting, name } = this.context;

    return (
      <div>
        {greeting} Hello **{name}**From Feature component{" "}
      </div>
    );
  }
}

export default FeaturedRooms;
