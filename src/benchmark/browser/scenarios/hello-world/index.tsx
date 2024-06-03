import Measure from "../../measure";

export default function HelloWorld() {
  return (
    <Measure id="Hello World">
      {new Array(1000).fill(0).map((_, idx) => (
        <div key={idx}>Hello World</div>
      ))}
    </Measure>
  );
}
