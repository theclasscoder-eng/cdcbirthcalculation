# Pediatric Growth Percentile App

Responsive React prototype for pediatric growth percentile screening. It supports the first chart type requested: boys birth to 24 months, length-for-age and weight-for-age.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Recharts
- lucide-react

## Install

```bash
npm install
```

## Run Dev Server

```bash
npm run dev
```

## Demo CDC-Style Data

The local files `src/data/cdcBoysBirth24Length.ts` and `src/data/cdcBoysBirth24Weight.ts` contain CDC-style demo curve data. These points are approximate visual/sample anchors for prototyping only and are labeled that way in the app.

The current supported curves are:

- 2nd
- 5th
- 10th
- 25th
- 50th
- 75th
- 90th
- 95th
- 98th

## Replacing With Official CDC LMS Data

For production use, replace the demo arrays in `src/data` with values generated from official CDC LMS tables. The code is already separated so official data can be inserted without rewriting the UI:

1. Load official CDC LMS rows for the target sex, age range, and metric.
2. Generate percentile values from LMS parameters for each desired month and percentile.
3. Replace the `points` arrays in `cdcBoysBirth24Length.ts` and `cdcBoysBirth24Weight.ts`.
4. Keep `GrowthChartData` shape unchanged so `percentileCalculator.ts` continues to interpolate between month anchors.

## Future Improvements

- Add official CDC LMS ingestion and curve generation.
- Add girls birth to 24 months.
- Add BMI-for-age, stature-for-age, and weight-for-stature.
- Add printable visit summaries.
- Add longitudinal tracking across multiple measurements.
"# cdcbirthcalculation" 
