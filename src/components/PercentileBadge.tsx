import { motion } from "framer-motion";
import type { PercentileResult } from "../types/growth";

interface PercentileBadgeProps {
  result: PercentileResult;
}

export function PercentileBadge({ result }: PercentileBadgeProps) {
  const tone = result.status === "typical-range"
    ? "bg-mint-100 text-mint-700 ring-mint-500/20"
    : result.status === "below-typical-range"
      ? "bg-amber-100 text-amber-800 ring-amber-500/20"
      : "bg-rose-100 text-rose-800 ring-rose-500/20";

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-bold ring-1 ${tone}`}
    >
      ~{result.estimatedPercentile}th percentile
    </motion.span>
  );
}
