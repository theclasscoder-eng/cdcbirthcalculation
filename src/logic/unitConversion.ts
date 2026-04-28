export function poundsToKilograms(value: number): number {
  return value / 2.2046226218;
}

export function kilogramsToPounds(value: number): number {
  return value * 2.2046226218;
}

export function inchesToCentimeters(value: number): number {
  return value * 2.54;
}

export function centimetersToInches(value: number): number {
  return value / 2.54;
}

export function toChartUnit(value: number, fromUnit: "lb" | "kg" | "in" | "cm", chartUnit: "lb" | "kg" | "in" | "cm"): number {
  if (fromUnit === chartUnit) return value;
  if (fromUnit === "kg" && chartUnit === "lb") return kilogramsToPounds(value);
  if (fromUnit === "lb" && chartUnit === "kg") return poundsToKilograms(value);
  if (fromUnit === "cm" && chartUnit === "in") return centimetersToInches(value);
  if (fromUnit === "in" && chartUnit === "cm") return inchesToCentimeters(value);
  return value;
}
