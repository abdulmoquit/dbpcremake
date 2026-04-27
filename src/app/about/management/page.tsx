"use client";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const management = [
  { name: "Fr. V.C George", role: "Rector & Principal" },
  { name: "Fr. Hansel Arvind Dutta", role: "Vice Principal" },
  { name: "Fr. Francis Hira Gomes", role: "Vice Rector / Assistant Principal" },
  { name: "Fr. Joseph Mudakkampurath", role: "Administrator / Bursar" },
  { name: "Fr. Joseph Podimattathil", role: "Principal - Technical" },
];

export default function ManagementPage() {
  return (
    <>
      <PageBanner title="The Management" subtitle="Salesian Fathers guiding Don Bosco School, Park Circus" />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {management.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center hover:shadow-lg transition group">
              <div className="w-20 h-20 bg-navy/10 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-gold/20 transition">
                <Users className="text-navy group-hover:text-gold transition" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-1">{m.name}</h3>
              <p className="text-gold text-sm font-medium">{m.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
