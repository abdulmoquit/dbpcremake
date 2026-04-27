"use client";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";

const timeline = [
  { year: "1886", text: "Don Bosco dreams of Calcutta – a vision of expanding his educational mission to cities including Hong Kong, Calcutta, and Madagascar." },
  { year: "1925", text: "Don Bosco Fathers and Brothers arrive in Calcutta and take charge of the Catholic Orphan Press." },
  { year: "1952", text: "Fr. P. Doro wins the Irish Sweep first prize, boosting the fund for a new school." },
  { year: "1955", text: "Land acquired at 73 Tiljala Road and 23 Darga Road, Park Circus. Construction begins on September 24." },
  { year: "1957", text: "Archbishop Dr. F. Perrier blesses the cornerstone on January 31. Fr. Charles Dyer appointed as first Rector and Principal." },
  { year: "1958", text: "Don Bosco School Park Circus opens on January 15 with 460 students and 12 staff members." },
  { year: "Today", text: "A leading educational institution offering holistic education with state-of-the-art infrastructure, 4000+ students, 180+ teachers, and a commitment to producing good Christians and honest citizens." },
];

export default function HistoryPage() {
  return (
    <>
      <PageBanner title="Our History" subtitle="The story of Don Bosco School, Park Circus — from a dream to reality" />
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gold/30" />
          {timeline.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="relative pl-16 pb-12 last:pb-0">
              <div className="absolute left-3 top-1 w-7 h-7 bg-gold text-navy rounded-full flex items-center justify-center text-[10px] font-bold shadow-md">{i + 1}</div>
              <span className="text-gold font-bold text-sm tracking-wider">{item.year}</span>
              <p className="text-gray-700 leading-relaxed mt-1">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 bg-navy text-white rounded-2xl p-10">
          <h2 className="font-serif text-2xl font-bold mb-4">The School Emblem</h2>
          <p className="text-white/80 leading-relaxed">
            The emblem of Don Bosco School features a cross, an open book placed on a lotus, and the motto &quot;Virtus Et Scientia.&quot; The Cross symbolizes Love, the Open Book signifies self-knowledge, and the Lotus represents purity. Virtus (virtue) is the moral and ethical quality enabling students to grow into mature human beings. Scientia (knowledge) is the ability to integrate oneself and discover the truth and beauty of life.
          </p>
        </motion.div>
      </section>
    </>
  );
}
