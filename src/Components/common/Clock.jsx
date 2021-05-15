import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

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
      <>
        <Card>
          <Card.Header className='text-center mb-4 font-weight-bold'>
            Current Time
          </Card.Header>
          <Card.Body>
            <Card.Title className='mb-4 text-lg-center'>
              {this.state.date.toLocaleTimeString()}
            </Card.Title>
            <Card.Subtitle className='mb-2  text-muted text-center'>
              Kalyan(west)
            </Card.Subtitle>
          </Card.Body>
          <Card.Footer>
            <div className='w-100 text-center mt-2'>
              Already have an Account? <Link to='/login'>Log In</Link>
            </div>
            <div className='w-100 text-center mt-2'>
              Need a new account? <Link to='/signup'>Sign Up</Link>
            </div>
          </Card.Footer>
        </Card>
      </>
    );
  }
}

export default Clock;
