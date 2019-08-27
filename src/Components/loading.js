import React, { Component } from "react";
import loadingGif from "../images/gif/loading-arrow.gif";

class Loading extends Component {
  state = {};
  render() {
    return (
      <div className="loading">
        <h4>room data loading.....</h4>
        <img src={loadingGif} />
      </div>
    );
  }
}

export default Loading;
