type LogMetricsFn = (
  id: any, // the "id" prop of the Profiler tree that has just committed
  phase: any, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration: any, // time spent rendering the committed update
  baseDuration: any, // estimated time to render the entire subtree without memoization
  startTime: any, // when React began rendering this update
  commitTime: any, // when React committed this update
) => void;

export const logReactMetrics: LogMetricsFn = (
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
) => {
  // eslint-disable-next-line no-console
  console.info({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
  });
};

export const reportProfilerResults = () => {};
