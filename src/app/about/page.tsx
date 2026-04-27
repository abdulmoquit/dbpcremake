"use client";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, BookOpen, Home, Trophy, Moon, Target, Heart } from "lucide-react";
import Image from "next/image";

const sections = [
  { title: "Management", desc: "Meet the Salesian Fathers guiding DBPC.", href: "/about/management", icon: Users, img: "/images/principal.png" },
  { title: "Our History", desc: "From Don Bosco's dream to reality.", href: "/about/history", icon: BookOpen, img: "/images/st_john_bosco.png" },
  { title: "House System", desc: "Savio, Bosco, Rua, and Francis.", href: "/about/houses", icon: Home, img: "/images/carousel_img_1.jpg" },
  { title: "Achievements", desc: "Excellence in academics and beyond.", href: "/about/achievements", icon: Trophy, img: "/images/carousel_img_3.jpg" },
  { title: "Night School", desc: "Adult literacy and night school programme.", href: "/about/night-school", icon: Moon, img: "/images/carousel_img_2.jpg" },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" subtitle="A legacy of excellence, rooted in the teachings of St. John Bosco" />
      
      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
            Nurturing Minds, <br />
            <span className="gold-gradient-text">Building Character.</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
            Don Bosco School, Park Circus, Kolkata, established in 1958, is a Christian Minority Institution recognized by the National Commission for Minority Educational Institutions. Guided by the educational philosophy of St. John Bosco, we aim to form students into honest citizens and good human beings.
          </p>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-navy text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(205,149,68,0.1),transparent_50%)]" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Target className="text-gold mb-6" size={48} strokeWidth={1} />
              <h3 className="font-serif text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-white/70 text-lg leading-relaxed font-light">
                To create a dynamic educational environment that fosters intellectual excellence, moral integrity, and social responsibility. We envision our students as proactive leaders who contribute positively to society, driven by the core values of the Salesian preventive system: Reason, Religion, and Loving Kindness.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <Heart className="text-gold mb-6" size={48} strokeWidth={1} />
              <h3 className="font-serif text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-white/70 text-lg leading-relaxed font-light">
                To provide a holistic education that caters to the physical, intellectual, emotional, and spiritual growth of every child. Through a rigorous academic curriculum, diverse extracurricular activities, and a strong emphasis on discipline and ethics, we prepare our students to navigate the complexities of the modern world with confidence and compassion.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="flex items-center gap-4 mb-12">
          <span className="w-12 h-1 bg-gold rounded-full" />
          <span className="text-gold font-bold tracking-widest uppercase text-sm">Explore More</span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Link href={s.href} className="group relative block h-[300px] rounded-3xl overflow-hidden shadow-lg transform-gpu hover:-translate-y-2 transition-all duration-500">
                <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent pointer-events-none" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <s.icon className="text-gold mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" size={32} />
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-2">{s.desc}</p>
                  <span className="text-gold text-sm font-bold flex items-center gap-2 group-hover:gap-4 transition-all">Explore <ArrowRight size={16} /></span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
