import React from "react";
import Circle from "./UI_Components/Circle.js";
import Button from "./UI_Components/Button.js";
import classes from "./UI_Components/Circle.module.css";

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
    this.state.counter > 0
      ? this.setState({ counter: this.state.counter - 1 })
      : this.setState({ counter: 0 });
  };
  removeHandler5 = () => {
    this.state.counter > 5
      ? this.setState({ counter: this.state.counter - 5 })
      : this.setState({ counter: 0 });
  };

  render() {
    let active = true;

    if (this.state.counter % 2 !== 0) {
      active = !active;
    }

    return (
      <main>
        <section className="circleContainer">
          <Circle
            color={active ? classes.circle : `${classes.circle} ${classes.odd}`}
            count={this.state.counter}
          />
        </section>
        <section className="boxContainer">
          <Button styletype="button" click={this.addHandler5}>
            Add 5
          </Button>
          <Button click={this.addHandler1}>Add 1</Button>
          <Button click={this.addHandler0}>Reset</Button>
          <Button click={this.removeHandler1}>Remove 1</Button>
          <Button type="submit" click={this.removeHandler5}>
            Remove 5
          </Button>
        </section>
      </main>
    );
  }
}

export default Main;
