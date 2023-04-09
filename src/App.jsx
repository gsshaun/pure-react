// import React from "react"
import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
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
