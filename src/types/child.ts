export interface ChildInfo {
  name: string;
  sex: "male" | "female";
  dateOfBirth: string;
  measurementDate: string;
  ageMonths: number;
  weight: number;
  weightUnit: "lb" | "kg";
  length: number;
  lengthUnit: "in" | "cm";
}
