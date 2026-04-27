"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Megaphone, 
  CalendarDays, 
  FileText, 
  Trophy, 
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  GraduationCap,
  Users,
  BookOpen,
  MapPin,
  Quote,
  UserCheck
} from "lucide-react";

export default function Home() {
  const heroImages = [
    "/images/carousel_img_1.jpg",
    "/images/carousel_img_2.jpg",
    "/images/carousel_img_3.jpg",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <main className="min-h-screen bg-cream font-sans overflow-x-hidden">

      {/* --- HERO SECTION --- */}
      <div className="relative min-h-[90vh] bg-navy text-white flex items-center justify-center">
        {/* Carousel Background */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ 
                opacity: currentSlide === index ? 1 : 0,
                scale: currentSlide === index ? 1 : 1.05 
              }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={src}
                alt={`School Campus ${index + 1}`}
                fill
                className="object-cover object-center transform-gpu"
                priority={index === 0}
                unoptimized
              />
              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/30 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-12 md:pt-20 pb-24 md:pb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-gold tracking-[0.3em] text-sm md:text-base font-bold uppercase mb-6 drop-shadow-md">
              Virtus et Scientia
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 drop-shadow-xl text-white">
              Educating with <br/>
              <span className="gold-gradient-text font-signature font-normal tracking-normal text-5xl md:text-8xl lg:text-[140px] relative top-2 pr-0 md:pr-6 drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)]">Faith & Purpose</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed drop-shadow-md">
              An English-medium Christian minority institution administered by the Salesians of Don Bosco, inspiring young minds since 1958.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link href="/admissions" className="group relative overflow-hidden bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-3 shadow-[0_0_20px_rgba(205,149,68,0.4)] hover:shadow-[0_0_30px_rgba(205,149,68,0.6)] hover:-translate-y-1">
                <span className="relative z-10">Discover Our School</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="group flex items-center gap-3 px-8 py-4 text-white font-medium hover:text-gold transition-colors duration-300">
                Explore Admissions 
                <span className="w-8 h-[1px] bg-white group-hover:bg-gold group-hover:w-12 transition-all duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Custom Slide Controls */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4 hidden md:flex">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 rounded-full transition-all duration-500 ease-out ${
                currentSlide === index ? "h-12 bg-gold shadow-[0_0_10px_rgba(205,149,68,0.8)]" : "h-3 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* --- INFO CARDS (Overlapping Hero) --- */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 -mt-12 md:-mt-24 mb-16 md:mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Megaphone, title: "Latest Notice", desc: "Notice for SOF Examinations", date: "April 10, 2026" },
            { icon: CalendarDays, title: "School Calendar", desc: "View important dates and events", date: "Updated Today" },
            { icon: FileText, title: "Admissions Open", desc: "For Class XI (2026-27) Apply Now", date: "Session 2026" },
            { icon: Trophy, title: "Achievements", desc: "Celebrating excellence in all fields", date: "Explore" }
          ].map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-navy/95 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl p-6 group cursor-pointer hover:-translate-y-2 hover:border-gold/30 transition-all duration-300 relative overflow-hidden transform-gpu"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500 text-white">
                <card.icon size={80} />
              </div>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gold mb-5 group-hover:bg-gold group-hover:text-navy transition-colors duration-300 shadow-md">
                <card.icon size={20} />
              </div>
              <h3 className="font-bold text-white mb-2">{card.title}</h3>
              <p className="text-sm text-white/60 mb-4 h-10">{card.desc}</p>
              <div className="flex items-center justify-between text-xs font-semibold text-gold uppercase tracking-wider">
                <span>{card.date}</span>
                <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- LEGACY SECTION --- */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-cream-dark/50 -skew-x-12 translate-x-20 z-0" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-1/2 relative transform-gpu"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/images/st_john_bosco.png" alt="St. John Bosco" fill className="object-cover object-top" unoptimized />
                <div className="absolute inset-0 bg-navy/10" />
              </div>
              {/* Floating Stat Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 80, damping: 15 }}
                className="absolute -bottom-8 -right-8 bg-gold text-navy p-8 rounded-2xl shadow-xl hidden md:block"
              >
                <div className="text-5xl font-serif font-bold mb-1">1958</div>
                <div className="text-sm font-bold tracking-widest uppercase opacity-90">Year Established</div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="w-full lg:w-1/2 lg:pl-10 transform-gpu"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-1 bg-gold rounded-full" />
                <span className="text-gold font-bold tracking-widest uppercase text-sm">Our Legacy</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                Building Character <br/>Since <span className="gold-gradient-text">1958</span>.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Don Bosco, whose name adorns over 2,032 educational institutions, was a visionary. He himself said that he never took a step unless directed by heaven.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Calcutta is a city of Don Bosco's dreams! The dream became a reality when the Don Bosco Fathers and Brothers came to Calcutta in 1925, eventually establishing this institution in 1958.
              </p>
              
              <div className="mb-12">
                <h3 className="font-signature text-5xl md:text-6xl text-navy/20 -ml-2 -mb-2 transform -rotate-2">St. John Bosco</h3>
                <p className="font-bold text-navy tracking-widest uppercase text-xs ml-4">Patron Saint</p>
              </div>

              <Link href="/about/history" className="group inline-flex items-center gap-4 text-navy font-bold hover:text-gold transition-colors">
                <span className="uppercase tracking-widest text-sm border-b-2 border-navy group-hover:border-gold pb-1 transition-colors">Explore Full History</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- PRINCIPAL'S MESSAGE --- */}
      <section className="py-16 md:py-24 bg-navy text-white relative">
        <div className="absolute top-10 left-10 text-white/5 font-serif text-[300px] leading-none select-none hidden md:block">"</div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-1/3 shrink-0"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gold translate-x-4 translate-y-4 rounded-2xl" />
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-4 border-navy shadow-2xl">
                  <Image src="/images/principal.png" alt="Fr. V. C. George" fill className="object-cover" unoptimized />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-2/3"
            >
              <Quote className="text-gold mb-6" size={48} strokeWidth={1} />
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-snug">
                Welcome to the official platform designed to enhance communication within our DBPC family and showcase our excellent community.
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10 font-light">
                I invite you to explore our new website and discover the many features and benefits it offers. Your feedback and suggestions are welcome as we continue to improve our online presence.
              </p>
              <div>
                <h4 className="font-bold text-xl text-gold mb-1">Fr. V. C. George</h4>
                <p className="text-sm tracking-widest uppercase opacity-60">Rector & Principal</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- NEWS & EVENTS GRID --- */}
      <section className="py-16 md:py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-1 bg-gold rounded-full" />
                <span className="text-gold font-bold tracking-widest uppercase text-sm">Stay Updated</span>
              </div>
              <h2 className="font-serif text-4xl font-bold text-navy">News & Campus Events</h2>
            </div>
            <Link href="/campus-life/activities" className="group flex items-center gap-2 text-navy font-bold hover:text-gold transition">
              View All Events <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Upcoming Events Column */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
            >
              <h3 className="text-xl font-bold text-navy mb-8 flex items-center gap-3">
                <CalendarDays className="text-gold" /> Upcoming Events
              </h3>
              <div className="space-y-6">
                {[
                  { date: "23", month: "APR", title: "First Terminal Unit Test Schedule (2025-26)", time: "8:00 AM - 2:00 PM" },
                  { date: "27", month: "APR", title: "SpellBee International Level 1", time: "9:00 AM - 1:00 PM" },
                  { date: "05", month: "MAY", title: "Coaching Details: 2025-26", time: "8:00 AM - 12:00 PM" }
                ].map((event, i) => (
                  <div key={i} className="flex gap-5 group cursor-pointer">
                    <div className="bg-navy text-white rounded-xl w-16 h-16 flex flex-col items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-300 shadow-md">
                      <span className="text-xl font-bold leading-none mb-1">{event.date}</span>
                      <span className="text-[10px] tracking-wider uppercase font-medium">{event.month}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-navy group-hover:text-gold transition-colors leading-snug mb-2">{event.title}</h4>
                      <p className="text-xs text-gray-500 font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300" /> {event.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Latest News Column */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
            >
              <h3 className="text-xl font-bold text-navy mb-8 flex items-center gap-3">
                <FileText className="text-gold" /> Latest News
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { img: "/images/news_1.jpg", title: "NOTICE & BOOKLIST FOR CLASS XI 2026-27", date: "April 6, 2026" },
                  { img: "/images/news_2.jpg", title: "SPELLBEE INTERNATIONAL LEVEL 4 MOCK TEST", date: "February 26, 2026" },
                  { img: "/images/news_3.jpg", title: "Holiday Invitation For Students", date: "May 27, 2025" },
                  { img: "/images/news_4.jpg", title: "Class XI Admission (External Candidates)", date: "January 21, 2025" }
                ].map((news, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 shadow-sm transform-gpu">
                      <Image src={news.img} alt={news.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500 will-change-transform" unoptimized />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-bold text-navy text-sm group-hover:text-gold transition-colors leading-snug mb-2 line-clamp-2">{news.title}</h4>
                      <p className="text-xs text-gray-500 font-medium">{news.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- QUICK STATS --- */}
      <section className="py-16 md:py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(205,149,68,0.15),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-white/10">
            {[
              { icon: GraduationCap, num: "1958", label: "Year Established" },
              { icon: Users, num: "4000+", label: "Active Students" },
              { icon: UserCheck, num: "180+", label: "Dedicated Teachers" },
              { icon: Trophy, num: "60+", label: "Years of Excellence" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="px-4"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-6">
                  <stat.icon size={32} strokeWidth={1.5} />
                </div>
                <div className="text-3xl md:text-5xl font-serif font-bold text-white mb-2">{stat.num}</div>
                <div className="text-xs md:text-sm font-bold tracking-widest text-gold uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
