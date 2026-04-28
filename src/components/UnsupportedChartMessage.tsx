import { Info } from "lucide-react";

export function UnsupportedChartMessage() {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-900">
      <div className="mb-2 flex items-center gap-2 font-bold">
        <Info className="h-5 w-5" />
        Chart not available
      </div>
      <p className="text-sm leading-6">
        This chart is not available yet. Currently supported: boys birth to 24 months length-for-age and weight-for-age.
      </p>
    </div>
  );
}
