import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Parent, Child } from "./App";

ReactDOM.render(
  <Parent>
    <Child />
  </Parent>,
  document.getElementById("root")
);
