"use client";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";

const houses = [
  { name: "Savio", color: "bg-red-500", textColor: "text-red-600", desc: "Red House stands for passion, courage, and relentless determination. Inspired by Saint Dominic Savio, it nurtures leadership and resilience in every challenge." },
  { name: "Bosco", color: "bg-blue-600", textColor: "text-blue-600", desc: "Blue House represents wisdom, integrity, and calm confidence. Guided by the vision of Saint John Bosco, it encourages students to balance knowledge with kindness." },
  { name: "Rua", color: "bg-green-600", textColor: "text-green-600", desc: "Green House embodies growth, harmony, and steady perseverance. Blessed Michael Rua's humility and dedication inspire members to chase excellence while fostering unity." },
  { name: "Francis", color: "bg-yellow-500", textColor: "text-yellow-600", desc: "Yellow House symbolizes optimism, energy, and creative brilliance. Following the ideals of Saint Francis de Sales, it encourages a cheerful spirit and fearless leadership." },
];

export default function HousesPage() {
  return (
    <>
      <PageBanner title="House System" subtitle="Four houses competing in academics, sports, and cultural activities" />
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {houses.map((h, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-2 h-full ${h.color}`} />
              <h3 className={`font-serif text-2xl font-bold ${h.textColor} mb-3`}>{h.name} House</h3>
              <p className="text-gray-600 leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
