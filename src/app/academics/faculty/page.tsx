"use client";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";

const departments = [
  { title: "Pre-Primary & Primary", desc: "Dedicated educators fostering creativity and foundational skills in a nurturing environment." },
  { title: "Secondary & Senior Secondary", desc: "Expert educators guiding students through advanced academics with innovation and excellence." },
  { title: "Administrative Staff", desc: "Skilled professionals coordinating school operations with efficiency and dedication." },
  { title: "Support Staff", desc: "Essential team ensuring smooth operation of facilities and creating optimal learning environments." },
];

export default function FacultyPage() {
  return (
    <>
      <PageBanner title="Our Faculty" subtitle="Experienced and dedicated educators committed to student development" />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {departments.map((d, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition">
              <h3 className="font-serif text-xl font-bold text-navy mb-3">{d.title}</h3>
              <p className="text-gray-600 leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
