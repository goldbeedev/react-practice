import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Justin", age: 32 },
      { name: "Ryan", age: 32 }
    ],
    otherState: "some other value"
  };

  switchNameHandler = newName => {
    console.log("was clicked!");
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Justin", age: 32 },
        { name: "Ryan", age: 32 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 32 },
        { name: "Ryan", age: 32 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Ryan Pellerin")}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Justin Goldby")}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Gaming
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", { className: "App" }, "Hi, I'm a React App!!!")
  // );
}

export default App;
