import type { PercentileResult } from "../types/growth";

export function getStatusMessage(status: PercentileResult["status"]): string {
  if (status === "below-typical-range") {
    return "This measurement is below the 5th percentile range on this chart. This does not diagnose a problem, but it may be worth reviewing with a pediatrician.";
  }

  if (status === "above-typical-range") {
    return "This measurement is above the 95th percentile range on this chart. This does not diagnose a problem, but it may be worth reviewing with a pediatrician.";
  }

  return "This measurement falls within the typical percentile range shown on this chart.";
}

export function getStatusLabel(status: PercentileResult["status"]): string {
  if (status === "below-typical-range") return "Below typical percentile range";
  if (status === "above-typical-range") return "Above typical percentile range";
  return "Typical range";
}
