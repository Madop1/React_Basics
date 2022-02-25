import React from "react";

class ClassApp extends React.Component {
  render() {
    return <ClassComponent name="props" />;
  }
}

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div style={{ color: "yellow",textAlign:"center"}}>
        Hello world using Class Component and using {this.props.name}{" "}
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

export default ClassApp;
