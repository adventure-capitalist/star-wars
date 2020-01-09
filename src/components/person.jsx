import React, { Component } from "react";
import DetailsButton from "./detailsButton";
class Person extends Component {
  clickEvent = sender => {
    this.props.clicked(sender);
    console.log("potato");
  };
  render() {
    return (
      <div className="listItem">
        {this.props.item.name} <br /> born: {this.props.item.birth_year} <br />
        gender: {this.props.item.gender}
        <DetailsButton
          item={this.props.item}
          clicked={() => this.clickEvent(this.props.item)}
        />
      </div>
    );
  }
}

export default Person;
