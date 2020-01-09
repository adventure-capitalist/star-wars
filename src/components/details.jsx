import React, { Component } from "react";
// import BackButton from "./backbutton";
class Details extends Component {
  render() {
    return (
      <div className="largeCard">
        {this.props.info.name} <br /> height: {this.props.info.height} <br />
        weight: {this.props.info.mass} <br />
        hair color: {this.props.info.hair_color} <br />
        <br />
        eye color: {this.props.info.eye_color}
        <br />
        skin color: {this.props.info.skin_color}
        {/* <BackButton onClick={this.props.onClick}></BackButton> */}
      </div>
    );
  }
}

export default Details;
