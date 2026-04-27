"use client";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";

export default function NightSchoolPage() {
  return (
    <>
      <PageBanner title="Night School & Adult Literacy" subtitle="Empowering the underprivileged through education after hours" />
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-10">
          <h2 className="font-serif text-2xl font-bold text-navy mb-4">About the Programme</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Don Bosco Night School is a free educational programme run for underprivileged children and adults who cannot attend regular school. Classes are conducted in the evening hours, providing basic literacy, numeracy, and life skills.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This initiative, rooted in St. John Bosco&apos;s mission to serve the poor and marginalized, has been transforming lives for decades. The programme is entirely supported by volunteers from the school staff and senior students.
          </p>
        </motion.div>
      </section>
    </>
  );
}
