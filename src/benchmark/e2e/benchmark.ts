import { Bench } from "tinybench";

const suite = new Bench({ time: 100 });

export default async function run() {
  suite
    .add("String()", () => {
      let num = 500;
      let nums = [];
      for (let i = 0; i < 100; ++i) {
        nums.push(String(num));
      }
    })
    .add(".toString()", () => {
      let num = 500;
      let nums = [];
      for (let i = 0; i < 100; ++i) {
        nums.push(num.toString());
      }
    });
  await suite.run();

  console.table(suite.table());
}
