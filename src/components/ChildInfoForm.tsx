import { motion } from "framer-motion";
import { Baby, CalendarDays, Ruler, Scale } from "lucide-react";
import type { ChangeEvent } from "react";
import { calculateAgeMonths } from "../logic/ageCalculator";
import type { ChildInfo } from "../types/child";
import { formatNumber } from "../utils/format";

interface ChildInfoFormProps {
  child: ChildInfo;
  errors: string[];
  onChange: (child: ChildInfo) => void;
}

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

export const defaultChildInfo: ChildInfo = {
  name: "Example Child",
  sex: "male",
  dateOfBirth: "2025-04-28",
  measurementDate: todayIso(),
  ageMonths: calculateAgeMonths("2025-04-28", todayIso()),
  weight: 22,
  weightUnit: "lb",
  length: 30,
  lengthUnit: "in"
};

export function ChildInfoForm({ child, errors, onChange }: ChildInfoFormProps) {
  function updateField(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    const numericFields = new Set(["weight", "length"]);
    const next = {
      ...child,
      [name]: numericFields.has(name) ? Number(value) : value
    };

    next.ageMonths = calculateAgeMonths(next.dateOfBirth, next.measurementDate);
    onChange(next);
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-white p-6 shadow-soft"
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-2xl bg-clinic-100 p-3 text-clinic-700">
          <Baby className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-950">Child information</h2>
          <p className="text-sm text-slate-500">Birth to 24 months screening support</p>
        </div>
      </div>

      <div className="grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-slate-700">Name</span>
          <input className="field" name="name" value={child.name} onChange={updateField} />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-slate-700">Sex</span>
          <select className="field" name="sex" value={child.sex} onChange={updateField}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2">
            <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <CalendarDays className="h-4 w-4 text-clinic-600" />
              Date of birth
            </span>
            <input className="field" type="date" name="dateOfBirth" value={child.dateOfBirth} onChange={updateField} />
          </label>
          <label className="grid gap-2">
            <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <CalendarDays className="h-4 w-4 text-clinic-600" />
              Measurement date
            </span>
            <input className="field" type="date" name="measurementDate" value={child.measurementDate} onChange={updateField} />
          </label>
        </div>

        <div className="rounded-2xl bg-clinic-50 p-4 text-sm text-clinic-900">
          Calculated age: <span className="font-bold">{formatNumber(child.ageMonths)} months</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-[1fr_120px]">
          <label className="grid gap-2">
            <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Scale className="h-4 w-4 text-clinic-600" />
              Weight
            </span>
            <input className="field" type="number" min="0" step="0.1" name="weight" value={child.weight} onChange={updateField} />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-slate-700">Unit</span>
            <select className="field" name="weightUnit" value={child.weightUnit} onChange={updateField}>
              <option value="lb">lb</option>
              <option value="kg">kg</option>
            </select>
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-[1fr_120px]">
          <label className="grid gap-2">
            <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Ruler className="h-4 w-4 text-clinic-600" />
              Length / height
            </span>
            <input className="field" type="number" min="0" step="0.1" name="length" value={child.length} onChange={updateField} />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-slate-700">Unit</span>
            <select className="field" name="lengthUnit" value={child.lengthUnit} onChange={updateField}>
              <option value="in">in</option>
              <option value="cm">cm</option>
            </select>
          </label>
        </div>
      </div>

      {errors.length > 0 && (
        <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50 p-4">
          <p className="mb-2 text-sm font-bold text-rose-800">Please review:</p>
          <ul className="space-y-1 text-sm text-rose-700">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.form>
  );
}
