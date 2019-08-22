import React from "react";

export default function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

Hero.defaultProps = {
  hero: "defaultHero",
  children: "Home"
};

/*
 **we can create same functionality with two ways 
** First way
import React, { Component } from "react";
class Hero extends Component {
  state = {};
  render() {
    return <header className={this.props.hero}>{this.props.children}</header>;
  }
}
export default Hero;

** Secound way 

const Hero = ({ children, hero }) => {
  return <header className={hero}>{children}</header>;
};

export default Hero;
*/
