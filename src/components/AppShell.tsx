import { motion } from "framer-motion";
import { HeartPulse } from "lucide-react";
import type { ReactNode } from "react";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#d9f0ff,transparent_34%),linear-gradient(135deg,#f8fcff_0%,#eef9ff_46%,#f8fbff_100%)] px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <main className="mx-auto max-w-7xl">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-clinic-200 bg-white/80 px-4 py-2 text-sm font-semibold text-clinic-800 shadow-sm backdrop-blur">
            <HeartPulse className="h-4 w-4" />
            Pediatric growth percentile screening
          </div>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            CDC-style growth percentile dashboard
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Enter a child&apos;s measurement, estimate percentile placement, and view the point on a CDC-style curve chart for boys birth to 24 months.
          </p>
        </motion.header>
        {children}
      </main>
    </div>
  );
}
