"use client";
import { motion } from "framer-motion";

export default function PageBanner({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="bg-navy text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,rgba(205,149,68,0.3),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-serif text-4xl md:text-5xl font-bold mb-3">
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="text-white/70 text-lg max-w-2xl">
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
