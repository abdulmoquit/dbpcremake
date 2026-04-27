"use client";
import PageBanner from "@/components/PageBanner";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const galleryData = [
  {
    category: "Inter School Carol Singing",
    images: [
      "https://www.donboscoparkcircus.org/assets/subpages/events/inter_school_junior_carol_singing_competition/IMG_1653.avif",
      "https://www.donboscoparkcircus.org/assets/subpages/events/inter_school_junior_carol_singing_competition/IMG_1670.avif",
      "https://www.donboscoparkcircus.org/assets/subpages/events/inter_school_junior_carol_singing_competition/IMG_1686.avif",
      "https://www.donboscoparkcircus.org/assets/subpages/events/inter_school_junior_carol_singing_competition/IMG_1695.avif",
      "https://www.donboscoparkcircus.org/assets/subpages/events/inter_school_junior_carol_singing_competition/IMG_1704.avif"
    ]
  },
  {
    category: "Night School Fete",
    images: [
      "https://www.donboscoparkcircus.org/assets/subpages/events/night_school_fete/WhatsApp%20Image%202025-12-17%20at%205.30.14%20PM.avif",
      "https://www.donboscoparkcircus.org/assets/subpages/events/night_school_fete/DSC_0126%20(1).avif",
      "https://www.donboscoparkcircus.org/assets/subpages/events/night_school_fete/DSC_0120%20(3).avif",
      "https://www.donboscoparkcircus.org/assets/subpages/events/night_school_fete/DSC_0114%20(3).avif",
      "https://www.donboscoparkcircus.org/assets/subpages/events/night_school_fete/DSC_0110%20(1).avif"
    ]
  },
  {
    category: "Art & Craft Exhibition",
    images: [
      "https://www.donboscoparkcircus.org/assets/subpages/events/art_and_craft_exhibition/IMG_2248.avif",
      "https://www.donboscoparkcircus.org/assets/subpages/events/art_and_craft_exhibition/IMG_2250.avif",
      "https://www.donboscoparkcircus.org/assets/subpages/events/art_and_craft_exhibition/IMG_2253.avif",
      "https://www.donboscoparkcircus.org/assets/subpages/events/art_and_craft_exhibition/IMG_2254.avif",
      "https://www.donboscoparkcircus.org/assets/subpages/events/art_and_craft_exhibition/IMG_2260.avif"
    ]
  },
  {
    category: "Christmas Celebration",
    images: [
      "https://www.donboscoparkcircus.org/assets/subpages/events/christmas_celebration/DBP_2656.avif",
      "https://www.donboscoparkcircus.org/assets/subpages/events/christmas_celebration/DBP_2674.avif",
      "https://www.donboscoparkcircus.org/assets/subpages/events/christmas_celebration/DBP_2680.avif",
      "https://www.donboscoparkcircus.org/assets/subpages/events/christmas_celebration/DBP_2689.avif",
      "https://www.donboscoparkcircus.org/assets/subpages/events/christmas_celebration/DBP_2707.avif"
    ]
  },
  {
    category: "School Facilities",
    images: [
      "https://www.donboscoparkcircus.org/assets/subpages/Gallery/school_building/DSC_2570.avif",
      "https://www.donboscoparkcircus.org/assets/subpages/Gallery/school_building/DSC_2791.avif"
    ]
  }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState(galleryData[0].category);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const activeImages = galleryData.find(g => g.category === activeCategory)?.images || [];

  return (
    <>
      <PageBanner title="Photo Gallery" subtitle="Glimpses of life, events, and facilities at Don Bosco School, Park Circus" />
      
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        
        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-16">
          {galleryData.map((data, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(data.category)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === data.category 
                  ? "bg-navy text-white shadow-lg" 
                  : "bg-white text-navy hover:bg-gold/10 hover:text-gold border border-gray-200"
              }`}
            >
              {data.category}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {activeImages.map((src, i) => (
              <motion.div 
                key={src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group shadow-md" 
                onClick={() => setLightbox(src)}
              >
                <Image 
                  src={src} 
                  alt={`Gallery Image ${i + 1}`} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 will-change-transform transform-gpu" 
                  unoptimized 
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-500 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <ZoomIn size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex items-center justify-center p-4" 
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2" onClick={() => setLightbox(null)}>
              <X size={40} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="relative max-w-6xl w-full aspect-video rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={lightbox} alt="Full resolution gallery image" fill className="object-contain" unoptimized />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
