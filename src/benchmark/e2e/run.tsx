import React from "react";
import run from "./benchmark";

export default function Run() {
  React.useEffect(() => {
    run();
  }, []);

  return <React.Fragment />;
}
