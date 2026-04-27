"use client";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";

const activities = [
  "Annual Sports Day", "Bosco Fest", "Science Exhibition", "Cultural Programme",
  "Inter-House Competitions", "Republic Day Celebrations", "Independence Day Celebrations",
  "Christmas Programme", "Don Bosco Feast Day", "Annual Prize Distribution",
];

export default function ActivitiesPage() {
  return (
    <>
      <PageBanner title="Activities" subtitle="A vibrant calendar of events fostering holistic development" />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 gap-6">
          {activities.map((a, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center gap-4 hover:shadow-lg transition">
              <span className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold text-sm shrink-0">{i + 1}</span>
              <h3 className="font-bold text-navy">{a}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
