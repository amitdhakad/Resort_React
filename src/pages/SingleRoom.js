import React, { Component } from "react";
import defaultImg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";

import { RoomContext } from "../context";
import StyledHero from "../Components/styledHero";

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
    console.log(room);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found....</h3>
          <Link to="/rooms" className="btn-primary">
            back to room
          </Link>
        </div>
      );
    }
    const {
      name,
      breakfast,
      images,
      description,
      capacity,
      size,
      price,
      extras,
      pets
    } = room;
    const [mainImage, ...restImages] = images;
    return (
      <React.Fragment>
        <StyledHero img={mainImage || this.state.defaultImg}>
          <Banner title={`${name} Room`}>
            <Link to="/rooms" className="btn-primary">
              back to room
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {restImages.map((item, index) => {
              return <img key={index} src={item} alert={name} />;
            })}
          </div>

          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Price : ${price}</h6>
              <h6>Size : {size} SQFT </h6>
              <h6>
                max capacity :{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "Pets allowed" : "No pets"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </section>
      </React.Fragment>
    );
  }
}

export default SingleRoom;
