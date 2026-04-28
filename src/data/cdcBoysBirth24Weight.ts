import type { GrowthChartData } from "../types/growth";

// CDC-style demo curve data derived from visual chart reading and rounded sample anchors.
// Replace these points with official CDC LMS-derived percentile values for production use.
export const cdcBoysBirth24Weight: GrowthChartData = {
  sex: "male",
  ageMinMonths: 0,
  ageMaxMonths: 24,
  metric: "weight-for-age",
  unit: "lb",
  points: [
    { ageMonths: 0, p2: 5.5, p5: 5.9, p10: 6.3, p25: 6.9, p50: 7.5, p75: 8.2, p90: 8.9, p95: 9.4, p98: 10.0 },
    { ageMonths: 1, p2: 7.0, p5: 7.5, p10: 8.0, p25: 8.8, p50: 9.7, p75: 10.6, p90: 11.5, p95: 12.1, p98: 12.8 },
    { ageMonths: 2, p2: 8.8, p5: 9.4, p10: 10.0, p25: 11.0, p50: 12.1, p75: 13.2, p90: 14.4, p95: 15.1, p98: 15.9 },
    { ageMonths: 3, p2: 10.2, p5: 10.9, p10: 11.6, p25: 12.8, p50: 14.1, p75: 15.4, p90: 16.8, p95: 17.6, p98: 18.5 },
    { ageMonths: 4, p2: 11.4, p5: 12.2, p10: 13.0, p25: 14.3, p50: 15.8, p75: 17.2, p90: 18.7, p95: 19.7, p98: 20.7 },
    { ageMonths: 5, p2: 12.4, p5: 13.3, p10: 14.1, p25: 15.6, p50: 17.1, p75: 18.7, p90: 20.3, p95: 21.3, p98: 22.4 },
    { ageMonths: 6, p2: 13.3, p5: 14.2, p10: 15.1, p25: 16.7, p50: 18.3, p75: 20.0, p90: 21.7, p95: 22.8, p98: 24.0 },
    { ageMonths: 9, p2: 15.2, p5: 16.3, p10: 17.3, p25: 19.1, p50: 20.9, p75: 22.8, p90: 24.8, p95: 26.0, p98: 27.4 },
    { ageMonths: 12, p2: 16.7, p5: 17.9, p10: 19.0, p25: 21.0, p50: 23.0, p75: 25.1, p90: 27.3, p95: 28.7, p98: 30.2 },
    { ageMonths: 15, p2: 18.0, p5: 19.3, p10: 20.5, p25: 22.6, p50: 24.8, p75: 27.0, p90: 29.4, p95: 30.9, p98: 32.5 },
    { ageMonths: 18, p2: 19.1, p5: 20.5, p10: 21.8, p25: 24.0, p50: 26.3, p75: 28.7, p90: 31.2, p95: 32.8, p98: 34.5 },
    { ageMonths: 21, p2: 20.1, p5: 21.6, p10: 22.9, p25: 25.3, p50: 27.7, p75: 30.2, p90: 32.9, p95: 34.6, p98: 36.4 },
    { ageMonths: 24, p2: 21.0, p5: 22.5, p10: 24.0, p25: 26.5, p50: 29.0, p75: 31.7, p90: 34.5, p95: 36.3, p98: 38.2 }
  ]
};
