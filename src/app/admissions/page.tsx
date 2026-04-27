"use client";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AdmissionsPage() {
  return (
    <>
      <PageBanner title="Admissions" subtitle="Join the Don Bosco family — applications open for the upcoming academic session" />
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-10">
          <h2 className="font-serif text-2xl font-bold text-navy mb-4">Admission Policy</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Don Bosco School, Park Circus is a Christian minority institution. As such, priority in admissions is given to Catholic boys. Provision is also made for the admissions of non-Catholic boys.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            For Class XI admissions (2026-27), applications are currently open. The school offers Science and Commerce streams at the ISC level.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-600 text-navy font-bold px-6 py-3 rounded transition text-sm">
            Contact for Admissions <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
