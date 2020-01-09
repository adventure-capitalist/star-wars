import React, { Component } from "react";
import Person from "./components/person";
import Details from "./components/details";

class Test extends Component {
  state = {
    raw: null,
    people: [],
    nextUrl: "",
    previousUrl: "",
    url: "https://swapi.co/api/people/?page=1",
    details: null,
    listView: true
  };

  componentDidMount() {
    this.getData(this.state.url);
  }
  getData = nextURL => {
    fetch(nextURL)
      .then(results => results.json())
      .then(dump => {
        this.setState({
          raw: dump,
          people: dump.results,
          nextUrl: dump.next || "https://swapi.co/api/people/?page=9",
          previousUrl: dump.previous || "https://swapi.co/api/people/?page=1"
        });
      });
  };

  getDetails = detailsURL => {
    fetch(detailsURL)
      .then(results => results.json())
      .then(dump => {
        this.setState({ details: dump, listView: false });
      });
    console.log(this.state);
  };

  clickHandler = sender => {
    console.log(sender);
    this.getDetails(sender.url);
  };

  increment = nextURL => {
    console.log("increment");
    this.getData(nextURL);
  };

  decrement = prevURL => {
    console.log("decrement");
    this.getData(prevURL);
  };
  render() {
    console.log(this.state.listView);
    if (this.state.listView === true) {
      return (
        <main>
          <h1>Once upon a time in a galaxy far far away lived...</h1>

          <div className="list">
            {this.state.people.map(item => (
              <Person item={item} clicked={this.clickHandler} />
            ))}
            <div className="controls">
              <button
                onClick={() => this.increment(this.state.nextUrl)}
                className="scroll"
              >
                Scroll forward
              </button>
              <button
                onClick={() => this.decrement(this.state.previousUrl)}
                className="scroll"
              >
                Scroll backward
              </button>
            </div>
          </div>
        </main>
      );
    } else {
      return (
        <main>
          <h1>Once upon a time in a galaxy far far away lived...</h1>
          <div className="list">
            <Details info={this.state.details} />
            <div className="controls">
              <button
                className="scroll"
                onClick={() => this.setState({ listView: true })}
              >
                Go Back
              </button>
            </div>
          </div>
        </main>
      );
    }
  }
}
export default Test;
