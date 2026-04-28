import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AppShell } from "./components/AppShell";
import { ChildInfoForm, defaultChildInfo } from "./components/ChildInfoForm";
import { GrowthChart } from "./components/GrowthChart";
import { ResultCard } from "./components/ResultCard";
import { UnsupportedChartMessage } from "./components/UnsupportedChartMessage";
import { getChartData } from "./logic/chartSelectors";
import { calculatePercentile } from "./logic/percentileCalculator";
import { toChartUnit } from "./logic/unitConversion";
import type { ChildInfo } from "./types/child";
import type { GrowthMetric, PercentileResult } from "./types/growth";

function validateChild(child: ChildInfo): string[] {
  const errors: string[] = [];
  const birth = new Date(`${child.dateOfBirth}T00:00:00`);
  const measured = new Date(`${child.measurementDate}T00:00:00`);

  if (!child.name.trim()) errors.push("Name is required.");
  if (!child.dateOfBirth || !child.measurementDate) errors.push("Date of birth and measurement date are required.");
  if (child.dateOfBirth && child.measurementDate && birth > measured) errors.push("Date of birth cannot be after measurement date.");
  if (child.ageMonths < 0 || child.ageMonths > 24) errors.push("Age must be 0-24 months for this chart.");
  if (!Number.isFinite(child.weight) || child.weight <= 0) errors.push("Weight must be positive.");
  if (!Number.isFinite(child.length) || child.length <= 0) errors.push("Length must be positive.");

  return errors;
}

function buildResult(child: ChildInfo, metric: GrowthMetric): PercentileResult | null {
  const chartData = getChartData(child, metric);
  if (!chartData) return null;

  const value = metric === "weight-for-age"
    ? toChartUnit(child.weight, child.weightUnit, chartData.unit)
    : toChartUnit(child.length, child.lengthUnit, chartData.unit);

  return calculatePercentile(child.ageMonths, value, chartData);
}

export default function App() {
  const [child, setChild] = useState<ChildInfo>(defaultChildInfo);

  const errors = useMemo(() => validateChild(child), [child]);
  const hasBlockingErrors = errors.length > 0;
  const weightChart = getChartData(child, "weight-for-age");
  const lengthChart = getChartData(child, "length-for-age");
  const isUnsupported = !weightChart || !lengthChart;

  const results = useMemo(() => {
    if (hasBlockingErrors) return [];
    return [buildResult(child, "weight-for-age"), buildResult(child, "length-for-age")].filter((result): result is PercentileResult => Boolean(result));
  }, [child, hasBlockingErrors]);

  const weightResult = results.find((result) => result.metric === "weight-for-age") ?? null;
  const lengthResult = results.find((result) => result.metric === "length-for-age") ?? null;

  return (
    <AppShell>
      <div className="grid gap-6 lg:grid-cols-[420px_1fr] lg:items-start">
        <ChildInfoForm child={child} errors={errors} onChange={setChild} />

        <div className="grid gap-6">
          {isUnsupported && !hasBlockingErrors && <UnsupportedChartMessage />}

          <AnimatePresence mode="popLayout">
            {results.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid gap-4 xl:grid-cols-2"
              >
                {results.map((result) => (
                  <ResultCard key={result.metric} result={result} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {weightChart && !hasBlockingErrors && (
            <GrowthChart chartData={weightChart} result={weightResult} childName={child.name} />
          )}

          {lengthChart && !hasBlockingErrors && (
            <GrowthChart chartData={lengthChart} result={lengthResult} childName={child.name} />
          )}
        </div>
      </div>
    </AppShell>
  );
}
