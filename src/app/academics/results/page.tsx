"use client";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";

export default function BoardResultsPage() {
  return (
    <>
      <PageBanner title="Board Results" subtitle="Academic performance of our students in ICSE and ISC examinations" />
      <section className="max-w-4xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-10 text-center">
          <h2 className="font-serif text-2xl font-bold text-navy mb-4">Academic Report</h2>
          <p className="text-gray-600 leading-relaxed">
            Don Bosco School, Park Circus has a consistent record of outstanding board examination results. Our students regularly achieve top scores in both ICSE (Class X) and ISC (Class XII) examinations, with many securing positions in national and state merit lists.
          </p>
        </motion.div>
      </section>
    </>
  );
}
