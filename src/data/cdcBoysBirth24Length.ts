import type { GrowthChartData } from "../types/growth";

// CDC-style demo curve data derived from visual chart reading and rounded sample anchors.
// Replace these points with official CDC LMS-derived percentile values for production use.
export const cdcBoysBirth24Length: GrowthChartData = {
  sex: "male",
  ageMinMonths: 0,
  ageMaxMonths: 24,
  metric: "length-for-age",
  unit: "in",
  points: [
    { ageMonths: 0, p2: 18.1, p5: 18.4, p10: 18.7, p25: 19.2, p50: 19.7, p75: 20.2, p90: 20.7, p95: 20.9, p98: 21.2 },
    { ageMonths: 1, p2: 19.8, p5: 20.1, p10: 20.4, p25: 20.9, p50: 21.4, p75: 21.9, p90: 22.4, p95: 22.7, p98: 23.0 },
    { ageMonths: 2, p2: 21.0, p5: 21.3, p10: 21.7, p25: 22.2, p50: 22.7, p75: 23.3, p90: 23.8, p95: 24.1, p98: 24.4 },
    { ageMonths: 3, p2: 22.0, p5: 22.4, p10: 22.7, p25: 23.3, p50: 23.9, p75: 24.4, p90: 25.0, p95: 25.3, p98: 25.6 },
    { ageMonths: 4, p2: 22.9, p5: 23.2, p10: 23.6, p25: 24.2, p50: 24.8, p75: 25.4, p90: 26.0, p95: 26.3, p98: 26.7 },
    { ageMonths: 5, p2: 23.6, p5: 24.0, p10: 24.4, p25: 25.0, p50: 25.6, p75: 26.2, p90: 26.8, p95: 27.2, p98: 27.5 },
    { ageMonths: 6, p2: 24.3, p5: 24.7, p10: 25.1, p25: 25.7, p50: 26.3, p75: 26.9, p90: 27.6, p95: 27.9, p98: 28.3 },
    { ageMonths: 9, p2: 26.0, p5: 26.4, p10: 26.8, p25: 27.5, p50: 28.1, p75: 28.8, p90: 29.5, p95: 29.9, p98: 30.3 },
    { ageMonths: 12, p2: 27.4, p5: 27.8, p10: 28.2, p25: 29.0, p50: 29.7, p75: 30.4, p90: 31.1, p95: 31.5, p98: 31.9 },
    { ageMonths: 15, p2: 28.7, p5: 29.1, p10: 29.6, p25: 30.4, p50: 31.1, p75: 31.9, p90: 32.7, p95: 33.1, p98: 33.5 },
    { ageMonths: 18, p2: 29.9, p5: 30.4, p10: 30.9, p25: 31.7, p50: 32.4, p75: 33.2, p90: 34.0, p95: 34.5, p98: 35.0 },
    { ageMonths: 21, p2: 31.0, p5: 31.5, p10: 32.0, p25: 32.8, p50: 33.6, p75: 34.4, p90: 35.3, p95: 35.8, p98: 36.3 },
    { ageMonths: 24, p2: 32.0, p5: 32.5, p10: 33.0, p25: 33.9, p50: 34.7, p75: 35.6, p90: 36.5, p95: 37.0, p98: 37.5 }
  ]
};
