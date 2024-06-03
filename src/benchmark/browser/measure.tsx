import * as React from "react";
import { logReactMetrics } from "./utils";

const start = performance.now();
let end;

interface Props {
  id: string;
}

export default function Measure(props: React.PropsWithChildren<Props>) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    if (ref.current) {
      // Force layout
      ref.current.getBoundingClientRect();

      end = performance.now();
      //@ts-ignore
      window.timing = {
        render: end - start,
      };
    }
  });

  return (
    <React.Profiler id={props.id} onRender={logReactMetrics}>
      <div ref={ref}>{props.children}</div>
    </React.Profiler>
  );
}
