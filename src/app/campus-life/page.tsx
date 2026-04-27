"use client";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, Trophy, Zap, MapPin, Smile } from "lucide-react";
import Image from "next/image";

const sections = [
  { title: "Action Groups", desc: "15 diverse clubs and movements fostering leadership and holistic growth.", href: "/campus-life/groups", icon: Users, img: "/images/hero_bg_4.jpg" },
  { title: "School Teams", desc: "Junior and senior teams excelling in sports and co-curricular activities.", href: "/campus-life/teams", icon: Trophy, img: "/images/hero_bg_3.jpg" },
  { title: "Activities", desc: "A vibrant calendar of events, fests, and cultural celebrations.", href: "/campus-life/activities", icon: Zap, img: "/images/carousel_img_1.jpg" },
];

export default function CampusLifePage() {
  return (
    <>
      <PageBanner title="Campus Life" subtitle="Beyond academics — nurturing talents, sportsmanship, and leadership" />
      
      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
            Vibrant, Dynamic, <br />
            <span className="gold-gradient-text">Uniquely Bosconian.</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
            Education at Don Bosco Park Circus extends far beyond the four walls of the classroom. Our sprawling campus is a hive of activity where students discover their passions, develop lifelong friendships, and build the confidence to lead. From intense sporting tournaments to grand cultural fests, life here is a continuous celebration of youth.
          </p>
        </motion.div>
      </section>

      {/* Facilities Image Split */}
      <section className="bg-navy text-white py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-1 bg-gold rounded-full" />
                <span className="text-gold font-bold tracking-widest uppercase text-sm">Our Facilities</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 leading-tight">
                A Space to Grow, <br/>Play, and Create.
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8 font-light">
                Our campus features a massive central playground for football and cricket, dedicated basketball courts, a multi-purpose auditorium for grand events, and specialized rooms for music, art, and dramatics.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-gold/20 p-2 rounded-lg text-gold"><MapPin size={20} /></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Central Location</h4>
                    <p className="text-sm text-white/60">Heart of Kolkata</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gold/20 p-2 rounded-lg text-gold"><Smile size={20} /></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Safe Environment</h4>
                    <p className="text-sm text-white/60">Secure & Monitored</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full lg:w-1/2 relative transform-gpu">
              <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10">
                <Image src="/images/carousel_img_3.jpg" alt="Campus Facilities" fill className="object-cover" unoptimized />
                <div className="absolute inset-0 bg-navy/10 mix-blend-multiply" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Navigation Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="flex items-center gap-4 mb-12 justify-center md:justify-start">
          <span className="w-12 h-1 bg-gold rounded-full" />
          <span className="text-gold font-bold tracking-widest uppercase text-sm">Experience the Campus</span>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Link href={s.href} className="group relative block h-[400px] rounded-3xl overflow-hidden shadow-lg transform-gpu hover:-translate-y-2 transition-all duration-500">
                <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent pointer-events-none" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                    <s.icon size={24} />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-white/80 text-sm mb-6 leading-relaxed">{s.desc}</p>
                  <span className="text-gold text-sm font-bold flex items-center gap-2 group-hover:gap-4 transition-all">Discover <ArrowRight size={16} /></span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
