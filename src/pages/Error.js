import React, { Component } from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";

class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Hero>
        <Banner title="404" subTitle="Page Not Found">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
    );
  }
}

export default Error;
