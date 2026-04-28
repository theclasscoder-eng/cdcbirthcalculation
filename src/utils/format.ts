import type { GrowthMetric } from "../types/growth";

export function formatNumber(value: number, digits = 1): string {
  return Number.isFinite(value) ? value.toFixed(digits) : "--";
}

export function formatMetric(metric: GrowthMetric): string {
  return metric === "weight-for-age" ? "Weight-for-age" : "Length-for-age";
}
