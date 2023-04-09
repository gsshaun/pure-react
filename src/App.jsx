import React from "react"
import { createRoot } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.bread),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Luna",
      bread: "Havanese",
    }),
    React.createElement(Pet, {
      animal: "Bird",
      name: "Pepet",
      bread: "Cocktiel",
    }),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Lilu",
      bread: "British",
    }),
  ]);
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
