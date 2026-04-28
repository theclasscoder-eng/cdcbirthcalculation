export function calculateAgeMonths(dateOfBirth: string, measurementDate: string): number {
  if (!dateOfBirth || !measurementDate) return 0;

  const birth = new Date(`${dateOfBirth}T00:00:00`);
  const measured = new Date(`${measurementDate}T00:00:00`);

  if (Number.isNaN(birth.getTime()) || Number.isNaN(measured.getTime()) || measured < birth) {
    return 0;
  }

  const millisecondsPerAverageMonth = 365.2425 / 12 * 24 * 60 * 60 * 1000;
  return Math.round(((measured.getTime() - birth.getTime()) / millisecondsPerAverageMonth) * 10) / 10;
}
