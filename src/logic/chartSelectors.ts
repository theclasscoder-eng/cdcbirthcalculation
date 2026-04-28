import { cdcBoysBirth24Length } from "../data/cdcBoysBirth24Length";
import { cdcBoysBirth24Weight } from "../data/cdcBoysBirth24Weight";
import type { ChildInfo } from "../types/child";
import type { GrowthChartData, GrowthMetric } from "../types/growth";

export function getChartData(child: ChildInfo, metric: GrowthMetric): GrowthChartData | null {
  if (child.sex !== "male" || child.ageMonths < 0 || child.ageMonths > 24) {
    return null;
  }

  if (metric === "weight-for-age") return cdcBoysBirth24Weight;
  if (metric === "length-for-age") return cdcBoysBirth24Length;

  return null;
}
