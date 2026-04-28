import { motion } from "framer-motion";
import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  ReferenceDot,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { percentileKeys, percentileLabels, type PercentileKey } from "../data/percentileTypes";
import type { GrowthChartData, PercentileResult } from "../types/growth";
import { formatMetric, formatNumber } from "../utils/format";

interface GrowthChartProps {
  chartData: GrowthChartData;
  result: PercentileResult | null;
  childName: string;
}

const curveColors: Record<PercentileKey, string> = {
  p2: "#94a3b8",
  p5: "#f59e0b",
  p10: "#38bdf8",
  p25: "#22c55e",
  p50: "#0f6e9f",
  p75: "#22c55e",
  p90: "#38bdf8",
  p95: "#f59e0b",
  p98: "#94a3b8"
};

export function GrowthChart({ chartData, result, childName }: GrowthChartProps) {
  const yValues = chartData.points.flatMap((point) => percentileKeys.map((key) => point[key]).filter((value): value is number => value !== undefined));
  const yMin = Math.floor(Math.min(...yValues) - 1);
  const yMax = Math.ceil(Math.max(...yValues) + 1);

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-white p-5 shadow-soft"
    >
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-950">{formatMetric(chartData.metric)}</h2>
          <p className="text-sm text-slate-500">CDC-style demo curve data, boys birth to 24 months</p>
        </div>
        <div className="text-sm font-semibold text-clinic-700">Unit: {chartData.unit}</div>
      </div>

      <div className="h-[420px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData.points} margin={{ top: 18, right: 42, bottom: 18, left: 4 }}>
            <CartesianGrid stroke="#e2edf5" strokeDasharray="3 3" />
            <XAxis
              dataKey="ageMonths"
              type="number"
              domain={[0, 24]}
              ticks={[0, 3, 6, 9, 12, 15, 18, 21, 24]}
              label={{ value: "Age in months", position: "insideBottom", offset: -8, fill: "#475569" }}
              stroke="#64748b"
            />
            <YAxis
              domain={[yMin, yMax]}
              label={{ value: chartData.metric === "weight-for-age" ? `Weight (${chartData.unit})` : `Length (${chartData.unit})`, angle: -90, position: "insideLeft", fill: "#475569" }}
              stroke="#64748b"
              width={52}
            />
            <Tooltip
              contentStyle={{ borderRadius: 16, border: "1px solid #dbeafe", boxShadow: "0 14px 30px rgba(15, 82, 115, 0.12)" }}
              formatter={(value, name) => [`${formatNumber(Number(value))} ${chartData.unit}`, percentileLabels[name as PercentileKey] ?? name]}
              labelFormatter={(label) => `Age: ${label} months`}
            />
            {percentileKeys.map((key) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={curveColors[key]}
                strokeWidth={key === "p50" ? 3 : 1.8}
                dot={false}
                isAnimationActive
                animationDuration={900}
              >
                <LabelList
                  dataKey={key}
                  position="right"
                  content={({ x, y, index }) => {
                    if (index !== chartData.points.length - 1 || x === undefined || y === undefined) return null;
                    return (
                      <text x={Number(x) + 6} y={Number(y) + 4} fill={curveColors[key]} fontSize={11} fontWeight={700}>
                        {percentileLabels[key]}
                      </text>
                    );
                  }}
                />
              </Line>
            ))}
            {result && (
              <ReferenceDot
                x={result.ageMonths}
                y={result.value}
                r={7}
                fill="#ef4444"
                stroke="#ffffff"
                strokeWidth={3}
                label={{ value: childName || "Child", position: "top", fill: "#991b1b", fontSize: 12, fontWeight: 700 }}
                ifOverflow="extendDomain"
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.section>
  );
}
