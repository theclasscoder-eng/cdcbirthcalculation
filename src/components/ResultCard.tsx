import { motion } from "framer-motion";
import { Ruler, Scale } from "lucide-react";
import { HealthRangeMessage } from "./HealthRangeMessage";
import { PercentileBadge } from "./PercentileBadge";
import type { PercentileResult } from "../types/growth";
import { formatMetric, formatNumber } from "../utils/format";

interface ResultCardProps {
  result: PercentileResult;
}

export function ResultCard({ result }: ResultCardProps) {
  const Icon = result.metric === "weight-for-age" ? Scale : Ruler;

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="rounded-2xl bg-white p-5 shadow-card transition"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-clinic-100 p-3 text-clinic-700">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900">{formatMetric(result.metric)}</h3>
            <p className="text-sm text-slate-500">
              {formatNumber(result.value)} {result.unit} at {formatNumber(result.ageMonths)} months
            </p>
          </div>
        </div>
        <PercentileBadge result={result} />
      </div>
      <div className="mb-4 text-sm text-slate-600">
        Nearest plotted curve: <span className="font-semibold text-slate-900">{result.nearestCurve}</span>
      </div>
      <HealthRangeMessage result={result} />
    </motion.article>
  );
}
