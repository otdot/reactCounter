import React from "react";
import Circle from "./Circle.js";

class Main extends React.Component {
  state = { counter: 0 };

  addHandler5 = () => {
    this.setState({ counter: this.state.counter + 5 });
  };
  addHandler1 = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  addHandler0 = () => {
    this.setState({ counter: (this.state.counter = 0) });
  };
  removeHandler1 = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  removeHandler5 = () => {
    this.setState({ counter: this.state.counter - 5 });
  };

  render() {
    return (
      <main>
        <section className="circleContainer">
          <Circle count={this.state.counter} />
        </section>
        <section className="boxContainer">
          <button onClick={this.addHandler5} className="box">
            Add five
          </button>
          <button onClick={this.addHandler1} className="box">
            Add one
          </button>
          <button onClick={this.addHandler0} className="box">
            Reset
          </button>
          <button onClick={this.removeHandler1} className="box">
            Remove one
          </button>
          <button onClick={this.removeHandler5} className="box">
            Remove five
          </button>
        </section>
      </main>
    );
  }
}

export default Main;
