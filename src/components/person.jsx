import React, { Component } from "react";
import DetailsButton from "./detailsButton";
class Person extends Component {
  render() {
    return (
      <div className="listItem">
        {this.props.item.name} <br /> born: {this.props.item.birth_year} <br />
        gender: {this.props.item.gender}
        <DetailsButton item={this.props.item} clicked={this.props.clicked} />
      </div>
    );
  }
}

export default Person;
