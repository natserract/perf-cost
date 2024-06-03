## Performance bench

Prototype of Benchmarking javacript code and react components

Go to: [benchmark](src/benchmark)

## Run
```sh
yarn dev
```

## Output
```sh
{
    "id": "Hello World",
    "phase": "mount",
    "actualDuration": 57.899999998509884,
    "baseDuration": 23.800000000745058,
    "startTime": 288.5,
    "commitTime": 395.90000000037253
}
{
    "id": "components",
    "phase": "mount",
    "actualDuration": 36.30000000074506,
    "baseDuration": 23.299999991431832,
    "startTime": 358.40000000037253,
    "commitTime": 395.90000000037253
}

Task Name 'String()'
ops/sec '373,266'
Average Time (ns) 2679.0493518591065
Margin '±8.06%'
Samples 37364

Task Name '.toString()'
ops/sec '420,819'
Average Time (ns) 2376.312913238467
Margin '±6.81%'
Samples 42082
```

## Todo
- Write `benchmarks.log` output file
- Launch benchmark on self browser (e.g: playwright browser https://playwright.dev/docs/api/class-browser)
- Run benchmark per-each of scenarios
