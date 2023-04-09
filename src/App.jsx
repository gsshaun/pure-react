// import React from "react"
import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me"),
  //   React.createElement(Pet, {
  //     animal: "Dog",
  //     name: "Luna",
  //     bread: "Havanese",
  //   }),
  //   React.createElement(Pet, {
  //     animal: "Bird",
  //     name: "Pepet",
  //     bread: "Cocktiel",
  //   }),
  //   React.createElement(Pet, {
  //     animal: "Cat",
  //     name: "Lilu",
  //     bread: "British",
  //   }),
  // ]);

  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Luna" animal="Dog" breed="Havanese" />
    <Pet name="Pepet" animal="Bird" breed="Cocktie" />
    <Pet name="Lilu" animal="Cat" breed="British" />
  </div>
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
