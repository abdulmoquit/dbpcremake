"use client";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export default function AchievementsPage() {
  return (
    <>
      <PageBanner title="Achievements" subtitle="Celebrating excellence across academics, sports, and co-curricular activities" />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-10 text-center">
          <Trophy className="text-gold mx-auto mb-6" size={60} strokeWidth={1.5} />
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">A Legacy of Excellence</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Don Bosco School, Park Circus has consistently produced outstanding results in ICSE and ISC board examinations. 
            Our students have excelled in inter-school competitions in academics, sports, debate, quiz, science exhibitions, 
            and cultural programs, bringing laurels to the institution year after year.
          </p>
        </motion.div>
      </section>
    </>
  );
}
