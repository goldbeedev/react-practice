import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Justin", age: 32 },
      { name: "Ryan", age: 32 }
    ]
  });

  const [otherState, setOtherState] = useState("some other value");

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log("Was clicked!");
    // DON'T DO THIS: this.state.persons[0].name = "Justin Goldby";
    setPersonsState({
      persons: [
        { name: "Max", age: 28 },
        { name: "Justin Goldby", age: 32 },
        { name: "Ryan", age: 27 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Gaming
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", { className: "App" }, "Hi, I'm a React App!!!")
  // );
};

export default app;
