import { motion } from "framer-motion";
import type { GrowthMetric } from "../types/growth";
import { formatMetric } from "../utils/format";

interface MeasurementToggleProps {
  selectedMetric: GrowthMetric;
  onChange: (metric: GrowthMetric) => void;
}

const metrics: GrowthMetric[] = ["weight-for-age", "length-for-age"];

export function MeasurementToggle({ selectedMetric, onChange }: MeasurementToggleProps) {
  return (
    <div className="grid grid-cols-2 rounded-2xl bg-clinic-50 p-1">
      {metrics.map((metric) => (
        <button
          key={metric}
          type="button"
          onClick={() => onChange(metric)}
          className={`relative rounded-xl px-4 py-3 text-sm font-semibold transition hover:scale-[1.01] ${
            selectedMetric === metric ? "text-clinic-900" : "text-slate-500 hover:text-clinic-800"
          }`}
        >
          {selectedMetric === metric && (
            <motion.span
              layoutId="metric-toggle"
              className="absolute inset-0 rounded-xl bg-white shadow-sm"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          <span className="relative">{formatMetric(metric)}</span>
        </button>
      ))}
    </div>
  );
}
