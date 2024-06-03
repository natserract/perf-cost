import React from "react";
import "./App.css";
import All from "./benchmark/browser/run";
import E2e from "./benchmark/e2e/run";

function App() {
  return (
    <React.Fragment>
      <All />
      <E2e />
    </React.Fragment>
  );
}

export default App;
