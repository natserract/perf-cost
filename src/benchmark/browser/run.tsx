import React from "react";
import HelloWorld from "./scenarios/hello-world";
import Components from "./scenarios/components";

export default function All() {
  return (
    <React.Fragment>
      <HelloWorld />
      <Components />
    </React.Fragment>
  );
}
