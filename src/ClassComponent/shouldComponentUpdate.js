import React, { Component } from "react";

export default class ComponentShouldUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "shouldComponentUpdate Method",
    };
  }
  shouldComponentUpdate() {
    return false; //to change state , return true;
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "ComponentDidMount Method" });
    }, 5000);
  }

  render() {
    return (
      <div>
        <p>This is a {this.state.name}</p>
      </div>
    );
  }
}
