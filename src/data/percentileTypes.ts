export const percentileKeys = ["p2", "p5", "p10", "p25", "p50", "p75", "p90", "p95", "p98"] as const;

export type PercentileKey = (typeof percentileKeys)[number];

export const percentileLabels: Record<PercentileKey, string> = {
  p2: "2nd",
  p5: "5th",
  p10: "10th",
  p25: "25th",
  p50: "50th",
  p75: "75th",
  p90: "90th",
  p95: "95th",
  p98: "98th"
};

export const percentileValues: Record<PercentileKey, number> = {
  p2: 2,
  p5: 5,
  p10: 10,
  p25: 25,
  p50: 50,
  p75: 75,
  p90: 90,
  p95: 95,
  p98: 98
};
