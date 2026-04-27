"use client";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Award, Library, Laptop } from "lucide-react";
import Image from "next/image";

const sections = [
  { title: "Curriculum", desc: "ICSE and ISC subject offerings and academic structure.", href: "/academics/curriculum", icon: BookOpen, img: "/images/hero_bg_3.jpg" },
  { title: "Faculty", desc: "Meet our dedicated team of experienced educators.", href: "/academics/faculty", icon: Users, img: "/images/hero_bg_2.jpg" },
  { title: "Board Results", desc: "Outstanding performance in ICSE and ISC examinations.", href: "/academics/results", icon: Award, img: "/images/hero_bg_4.jpg" },
];

export default function AcademicsPage() {
  return (
    <>
      <PageBanner title="Academics" subtitle="Pursuing intellectual excellence through a rigorous curriculum" />
      
      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
            Academic Rigour, <br />
            <span className="gold-gradient-text">Holistic Development.</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
            At Don Bosco School, Park Circus, we follow the Indian Certificate of Secondary Education (ICSE) and the Indian School Certificate (ISC) curriculum. Our pedagogical approach emphasizes critical thinking, creativity, and the practical application of knowledge, ensuring our students are well-prepared for higher education and global challenges.
          </p>
        </motion.div>
      </section>

      {/* Academic Highlights */}
      <section className="bg-cream-dark py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16 justify-center">
            <span className="w-12 h-1 bg-gold rounded-full" />
            <span className="text-gold font-bold tracking-widest uppercase text-sm">Our Approach</span>
            <span className="w-12 h-1 bg-gold rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 mx-auto bg-navy/5 text-navy rounded-2xl flex items-center justify-center mb-6">
                <Laptop size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-4">Modern Facilities</h3>
              <p className="text-gray-600 font-light leading-relaxed">State-of-the-art science laboratories, advanced computer centers, and smart classrooms designed to facilitate interactive and engaging learning experiences.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-navy p-10 rounded-3xl shadow-xl text-center transform-gpu md:-translate-y-4">
              <div className="w-16 h-16 mx-auto bg-gold/20 text-gold rounded-2xl flex items-center justify-center mb-6">
                <Award size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-white/80 font-light leading-relaxed">Consistently achieving 100% pass rates with exceptional top-tier scores in both ICSE and ISC board examinations year after year.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 mx-auto bg-navy/5 text-navy rounded-2xl flex items-center justify-center mb-6">
                <Library size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-4">Extensive Library</h3>
              <p className="text-gray-600 font-light leading-relaxed">A vast repository of physical books, digital resources, and academic journals to cultivate a deep love for reading and independent research.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="flex items-center gap-4 mb-12">
          <span className="w-12 h-1 bg-gold rounded-full" />
          <span className="text-gold font-bold tracking-widest uppercase text-sm">Academic Portals</span>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Link href={s.href} className="group relative block h-[350px] rounded-3xl overflow-hidden shadow-lg transform-gpu hover:-translate-y-2 transition-all duration-500">
                <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent pointer-events-none" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <s.icon className="text-gold mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" size={36} />
                  <h3 className="font-serif text-3xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-white/80 text-sm mb-6 leading-relaxed">{s.desc}</p>
                  <span className="inline-flex items-center gap-2 bg-gold text-navy px-5 py-2.5 rounded-full text-sm font-bold w-fit group-hover:bg-gold-light transition-colors">
                    View Details <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
