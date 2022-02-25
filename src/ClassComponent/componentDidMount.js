import React, { Component } from "react";

export default class ComponentDidMount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "This name will change in 5sec",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "This is a componentDidMount method" });
    }, 5000);
    console.log("Mounted")
  }

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
      </div>
    );
  }
}
