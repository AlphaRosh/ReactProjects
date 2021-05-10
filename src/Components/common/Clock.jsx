import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  //Runs after the component output has been rendered to the DOM
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }
  //The componentDidMount() method runs after the component output has been rendered to the DOM.
  //TheThis is a good place to set up a timer:
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <div>
        <h3>It is {this.state.date.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

export default Clock;
