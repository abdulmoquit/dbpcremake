"use client";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const icseSubjects = ["English", "Hindi", "Bengali", "Mathematics", "Science (Physics, Chemistry, Biology)", "History & Civics", "Geography", "Computer Applications", "Moral Science", "Physical Education", "Art & Craft"];
const scienceStream = ["English", "Physics", "Chemistry", "Mathematics", "Biology / Computer Science", "Physical Education"];
const commerceStream = ["English", "Accounts", "Commerce", "Economics", "Mathematics / Business Studies", "Physical Education"];

export default function CurriculumPage() {
  return (
    <>
      <PageBanner title="Our Curriculum" subtitle="ICSE and ISC affiliation with comprehensive academic programmes" />
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-10">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-gold" size={28} />
            <h2 className="font-serif text-2xl font-bold text-navy">ICSE Section (Nursery – Class X)</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            The Indian Certificate of Secondary Education (ICSE) section prepares students for the ICSE Examination of the Council for the Indian School Certificate Examination, New Delhi.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {icseSubjects.map((s, i) => (
              <div key={i} className="bg-gray-50 rounded-lg px-4 py-2.5 text-sm text-navy font-medium">{s}</div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h3 className="font-serif text-xl font-bold text-navy mb-4">ISC Science Stream (XI–XII)</h3>
            <ul className="space-y-2">
              {scienceStream.map((s, i) => <li key={i} className="flex items-center gap-2 text-gray-600"><span className="w-2 h-2 bg-gold rounded-full" />{s}</li>)}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h3 className="font-serif text-xl font-bold text-navy mb-4">ISC Commerce Stream (XI–XII)</h3>
            <ul className="space-y-2">
              {commerceStream.map((s, i) => <li key={i} className="flex items-center gap-2 text-gray-600"><span className="w-2 h-2 bg-gold rounded-full" />{s}</li>)}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}
