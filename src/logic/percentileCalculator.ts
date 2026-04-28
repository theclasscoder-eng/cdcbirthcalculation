import { percentileKeys, percentileLabels, percentileValues, type PercentileKey } from "../data/percentileTypes";
import { getStatusMessage } from "./growthStatus";
import type { GrowthChartData, PercentilePoint, PercentileResult } from "../types/growth";

function interpolateValue(lower: PercentilePoint, upper: PercentilePoint, ageMonths: number, key: PercentileKey): number {
  const lowerValue = lower[key];
  const upperValue = upper[key];

  if (lowerValue === undefined || upperValue === undefined) {
    throw new Error(`Missing percentile curve value for ${key}`);
  }

  if (upper.ageMonths === lower.ageMonths) return lowerValue;

  const ratio = (ageMonths - lower.ageMonths) / (upper.ageMonths - lower.ageMonths);
  return lowerValue + (upperValue - lowerValue) * ratio;
}

function getBoundingPoints(ageMonths: number, points: PercentilePoint[]): [PercentilePoint, PercentilePoint] {
  const sorted = [...points].sort((a, b) => a.ageMonths - b.ageMonths);
  const first = sorted[0];
  const last = sorted[sorted.length - 1];

  if (ageMonths <= first.ageMonths) return [first, first];
  if (ageMonths >= last.ageMonths) return [last, last];

  for (let index = 0; index < sorted.length - 1; index += 1) {
    const lower = sorted[index];
    const upper = sorted[index + 1];
    if (ageMonths >= lower.ageMonths && ageMonths <= upper.ageMonths) {
      return [lower, upper];
    }
  }

  return [last, last];
}

function interpolateBetweenPercentiles(value: number, curveValues: Array<{ key: PercentileKey; percentile: number; value: number }>): number {
  const first = curveValues[0];
  const last = curveValues[curveValues.length - 1];

  if (value <= first.value) return first.percentile;
  if (value >= last.value) return last.percentile;

  for (let index = 0; index < curveValues.length - 1; index += 1) {
    const lower = curveValues[index];
    const upper = curveValues[index + 1];

    if (value >= lower.value && value <= upper.value) {
      const ratio = (value - lower.value) / (upper.value - lower.value);
      return lower.percentile + (upper.percentile - lower.percentile) * ratio;
    }
  }

  return last.percentile;
}

export function calculatePercentile(ageMonths: number, value: number, chartData: GrowthChartData): PercentileResult {
  const [lowerPoint, upperPoint] = getBoundingPoints(ageMonths, chartData.points);

  const curveValues = percentileKeys.map((key) => ({
    key,
    percentile: percentileValues[key],
    value: interpolateValue(lowerPoint, upperPoint, ageMonths, key)
  }));

  const estimatedPercentile = Math.round(interpolateBetweenPercentiles(value, curveValues));
  const nearest = curveValues.reduce((closest, current) => (
    Math.abs(current.value - value) < Math.abs(closest.value - value) ? current : closest
  ));

  const p5 = curveValues.find((curve) => curve.key === "p5")?.value ?? Number.NEGATIVE_INFINITY;
  const p95 = curveValues.find((curve) => curve.key === "p95")?.value ?? Number.POSITIVE_INFINITY;
  const status: PercentileResult["status"] = value < p5
    ? "below-typical-range"
    : value > p95
      ? "above-typical-range"
      : "typical-range";

  return {
    metric: chartData.metric,
    value,
    unit: chartData.unit,
    ageMonths,
    estimatedPercentile,
    nearestCurve: percentileLabels[nearest.key],
    status,
    message: getStatusMessage(status)
  };
}
