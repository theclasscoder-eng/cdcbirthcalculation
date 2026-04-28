export type GrowthMetric = "weight-for-age" | "length-for-age";

export interface PercentilePoint {
  ageMonths: number;
  p2?: number;
  p5?: number;
  p10?: number;
  p25?: number;
  p50?: number;
  p75?: number;
  p90?: number;
  p95?: number;
  p98?: number;
}

export interface PercentileResult {
  metric: GrowthMetric;
  value: number;
  unit: "lb" | "kg" | "in" | "cm";
  ageMonths: number;
  estimatedPercentile: number;
  nearestCurve: string;
  status: "below-typical-range" | "typical-range" | "above-typical-range";
  message: string;
}

export interface GrowthChartData {
  sex: "male" | "female";
  ageMinMonths: number;
  ageMaxMonths: number;
  metric: GrowthMetric;
  unit: "lb" | "kg" | "in" | "cm";
  points: PercentilePoint[];
}
