import React from "react";

import "./App.css";
import HomePage from "./Pages/HomePage";

const recipes = [
  {
    author: "Jim",
    name: "Chicken Curry",
    description: "Delicious spicy chicken curry",
  },
  {
    author: "Aravind",
    name: "Hamburger",
    description: "Juicy burger with toppings and a soft bun",
  },
];

function App() {
  return <HomePage />;
}

export default App;
