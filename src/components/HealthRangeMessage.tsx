import { AlertCircle, CheckCircle2, TrendingUp } from "lucide-react";
import { getStatusLabel } from "../logic/growthStatus";
import type { PercentileResult } from "../types/growth";

interface HealthRangeMessageProps {
  result: PercentileResult;
}

export function HealthRangeMessage({ result }: HealthRangeMessageProps) {
  const Icon = result.status === "typical-range" ? CheckCircle2 : result.status === "below-typical-range" ? AlertCircle : TrendingUp;
  const tone = result.status === "typical-range" ? "text-mint-700" : result.status === "below-typical-range" ? "text-amber-700" : "text-rose-700";

  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <div className={`mb-2 flex items-center gap-2 font-semibold ${tone}`}>
        <Icon className="h-4 w-4" />
        {getStatusLabel(result.status)}
      </div>
      <p className="text-sm leading-6 text-slate-600">{result.message}</p>
    </div>
  );
}
