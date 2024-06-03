import * as React from "react";
import Measure from "../../measure";

const Div = React.forwardRef<any, any>(function Div(props, ref) {
  return <div ref={ref} {...props} />;
});

export default function Components() {
  return (
    <Measure id="components">
      {new Array(1000).fill(0).map((_, idx) => (
        <Div key={idx}>test case</Div>
      ))}
    </Measure>
  );
}
