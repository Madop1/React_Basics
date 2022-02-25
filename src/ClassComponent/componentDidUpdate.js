import React, { Component } from "react";

export default class ComponentDidUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "from previous state",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "to current state" });
    }, 5000);
  }
  componentDidUpdate(prevState) {
    if (prevState.name !== this.state.name) {
      document.getElementById("statechange").innerHTML =
        "Yes the state is changed";
      
    }
    console.log("Updated")
  }

  render() {
    return (
      <div>
        State was changed {this.state.name}
        <p id="statechange"></p>
      </div>
    );
  }
}
