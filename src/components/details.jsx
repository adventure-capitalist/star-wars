import React, { Component } from "react";
// import BackButton from "./backbutton";
class Details extends Component {
  render() {
    return (
      <div>
        {this.state.details.name} <br /> height: {this.state.details.height}{" "}
        <br />
        weight: {this.state.details.mass} <br />
        hair color: {this.state.details.hair_color} <br />
        <br />
        eye color: {this.state.details.eye_color}
        <br />
        skin color: {this.state.details.skin_color}
        {/* <BackButton onClick={this.props.onClick}></BackButton> */}
      </div>
    );
  }
}

export default Details;
