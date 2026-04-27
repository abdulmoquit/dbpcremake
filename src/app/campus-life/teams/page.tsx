"use client";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";

export default function TeamsPage() {
  return (
    <>
      <PageBanner title="School Teams" subtitle="Junior and senior teams showcasing talent in sports and co-curricular activities" />
      <section className="max-w-4xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-10">
          <h2 className="font-serif text-2xl font-bold text-navy mb-4">Welcome to Our School Teams</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At Don Bosco School, Park Circus, we foster sporting and co-curricular talent through our diverse junior and senior teams. These teams represent our school in interschool tournaments, embodying dedication and sportsmanship.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our sports programs cultivate discipline, teamwork, leadership, and physical fitness. With expert coaching, our students excel in cricket, football, basketball, athletics, table tennis, badminton, and many other sports.
          </p>
        </motion.div>
      </section>
    </>
  );
}
