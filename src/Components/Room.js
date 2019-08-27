import React, { Component } from "react";
import defaultImg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
class Room extends Component {
  render() {
    const { name, slug, price, images } = this.props.room;
    return (
      <article className="room">
        <div className="img-container">
          <img src={images[0] || defaultImg} alt="single room" />
          <div className="price-top">
            <h6>${price}</h6>
            per night
          </div>
          <Link to={`/rooms/${slug}`} className="btn-primary room-link">
            Fearures
          </Link>
        </div>
        <p className="room-info">{name}</p>
      </article>
    );
  }
}
export default Room;
Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired
  })
};
